import firebase from 'firebase';
import { TimestampToDate } from 'utils/functions';
import { HistoryQuery, HistoryQueryFB } from 'utils/types';

interface FetchHistoryListResponse {
  historyList: HistoryQuery[];
  maxHistoryId: number;
}

export const fetchHistoryList = async (): Promise<FetchHistoryListResponse> => {
  const historysRef = firebase.firestore().collection('searches');
  const snapshot = await historysRef.orderBy('time', 'desc').get();

  const historyList = snapshot.docs.map((doc) => {
    const { time, ...rest } = doc.data() as HistoryQueryFB;
    const newHistory = { time: TimestampToDate(time), ...rest } as HistoryQuery;
    return newHistory;
  });

  const maxHistoryId = MaxIdfromArray(historyList);

  return { historyList, maxHistoryId };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MaxIdfromArray = (array: any[]) => Math.max(...array.map((item) => item.id));

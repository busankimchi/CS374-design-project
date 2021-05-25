import firebase from 'firebase';
import { Topic } from 'utils/types';

interface FetchTopicListResponse {
  topicList: Topic[];
  maxTopicId: number;
  maxSubTopicId: number;
}

export const fetchTopicList = async (): Promise<FetchTopicListResponse> => {
  const topicsRef = firebase.firestore().collection('topics');
  const snapshot = await topicsRef.orderBy('id').get();

  const topicList = snapshot.docs.map((doc) => {
    const data = { ...doc.data() } as Topic;
    return data;
  });

  const maxTopicId = MaxIdfromArray(topicList);
  const maxSubTopicId = Math.max(
    ...topicList.map((item) => (item.subTopic === undefined ? 0 : MaxIdfromArray(item.subTopic))),
  );
  return { topicList, maxTopicId, maxSubTopicId };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MaxIdfromArray = (array: any[]) => Math.max(...array.map((item) => item.id));

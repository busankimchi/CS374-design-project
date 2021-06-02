import firebase from 'firebase';
import { HistoryQueryFB } from 'utils/types';

export const deleteHistory = async (history: HistoryQueryFB): Promise<void> => {
  const historysRef = firebase.firestore().collection('searches');

  await historysRef.doc(`${history.id}`).delete();
};

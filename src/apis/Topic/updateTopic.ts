import firebase from 'firebase';
import { Topic } from 'utils/types';

export const updateTopic = async (topic: Topic): Promise<void> => {
  const topicsRef = firebase.firestore().collection('topics');
  const { docId, ...newTopic } = topic;

  await topicsRef.doc(docId).set({ ...newTopic });
};

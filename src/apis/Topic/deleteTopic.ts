import firebase from 'firebase';
import { Topic } from 'utils/types';

export const deleteTopic = async (topic: Topic): Promise<void> => {
  const topicsRef = firebase.firestore().collection('topics');

  await topicsRef.doc(`${topic.id}`).delete();
};

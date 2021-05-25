import firebase from 'firebase';
import { Topic } from 'utils/types';

export const deleteTopic = async (topic: Topic): Promise<void> => {
  const topicsRef = firebase.firestore().collection('topics');
  const { docId } = topic;

  await topicsRef.doc(docId).delete();
};

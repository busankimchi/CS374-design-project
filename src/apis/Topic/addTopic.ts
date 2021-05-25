import firebase from 'firebase';
import { Topic } from 'utils/types';

export const addTopic = async (topic: Topic): Promise<string> => {
  const topicsRef = firebase.firestore().collection('topics');

  const response = await topicsRef.add({ ...topic });

  return response.id;
};

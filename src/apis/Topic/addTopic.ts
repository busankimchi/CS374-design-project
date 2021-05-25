import firebase from 'firebase';
import { Topic } from 'utils/types';

export const addTopic = (topic: Topic) => {
  firebase.firestore().collection('topics').doc(`${topic.id}`).set({ ...topic });
};

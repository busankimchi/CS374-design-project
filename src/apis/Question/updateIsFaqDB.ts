import firebase from 'firebase';

export const updateIsFaqDB = (isFaq: boolean, questionId: number) => {
  firebase.firestore().collection('questions').doc(`${questionId}`).update({
    isFaq,
  });
};

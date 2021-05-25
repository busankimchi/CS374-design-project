import firebase from 'firebase';

export const updateIsFaq = (isFaq: boolean, questionId: number) => {
    firebase.firestore().collection('questions').doc(`${questionId}`).update({
        isFaq
    });
};

import firebase from 'firebase';
import { AnswerContent } from '../../utils/types'
import { AnswerToObject } from '../../utils/functions'

export const appendAnswerDB = (answer: AnswerContent, questionId: number) => {
    firebase.firestore().collection('questions').doc(`${questionId}`).update({
        answers: firebase.firestore.FieldValue.arrayUnion(AnswerToObject(answer)),
    });
};

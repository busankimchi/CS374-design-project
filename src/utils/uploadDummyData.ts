import firebase from 'firebase';
import { dummyQuestion } from './dummyDatas'

export const uploadDummyQuestion = () => {
    const ans: Array<Record<string, unknown>> = []

    dummyQuestion.answers.forEach((answer) => {
        ans.push({
            name: answer.name,
            image: answer.image,
            time: answer.time,
            content: answer.content,
        })
    })

    firebase.firestore().collection('questions').doc("1").set({
        questionId: dummyQuestion.questionId,
        topic: dummyQuestion.topic,
        subtopic: dummyQuestion.subtopic,
        isFaq: dummyQuestion.isFaq,
        question: {
            name: dummyQuestion.question.name,
            image: dummyQuestion.question.image,
            time: dummyQuestion.question.time,
            title: dummyQuestion.question.title,
            content: dummyQuestion.question.content,
        },
        answers: ans,
    })
};

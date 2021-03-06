import firebase from 'firebase';
import { dummyQuestions, dummyTopics, dummySearchHistories } from './dummyDatas';
import { DateToTimestamp } from './functions';

export const uploadDummyQuestions = () => {
  dummyQuestions.forEach((dummyQuestion) => {
    // eslint-disable-next-line no-console
    console.log(`Uploading ${dummyQuestion.questionId}`);
    const ans: Array<Record<string, unknown>> = [];

    dummyQuestion.answers.forEach((answer) => {
      ans.push({
        name: answer.name,
        image: answer.image,
        time: answer.time,
        content: answer.content,
      });
    });

    firebase
      .firestore()
      .collection('questions')
      .doc(`${dummyQuestion.questionId}`)
      .set(
        {
          questionId: dummyQuestion.questionId,
          topic: dummyQuestion.topic,
          topicId: dummyQuestion.topicId,
          subtopic: dummyQuestion.subtopic,
          subtopicId: dummyQuestion.subtopicId,
          isFaq: dummyQuestion.isFaq,
          question: {
            name: dummyQuestion.question.name,
            image: dummyQuestion.question.image,
            time: DateToTimestamp(dummyQuestion.question.time),
            title: dummyQuestion.question.title,
            content: dummyQuestion.question.content,
          },
          answers: ans,
        },
        { merge: true },
      );
  });
};

export const uploadDummyTopics = () => {
  dummyTopics.forEach((dummyTopic) => {
    const ans: Array<Record<string, unknown>> = [];

    dummyTopic.subTopic?.forEach((subtopic) => {
      ans.push({
        id: subtopic.id,
        subTopicName: subtopic.subTopicName,
        questionList: subtopic.questionList,
      });
    });

    firebase.firestore().collection('topics').doc(`${dummyTopic.id}`).set({
      id: dummyTopic.id,
      topicName: dummyTopic.topicName,
      subTopic: ans,
    });
  });
};

export const uploadDummySearchHistory = () => {
  dummySearchHistories.forEach((dummySearchHistory) => {
    firebase
      .firestore()
      .collection('searches')
      .doc(`${dummySearchHistory.id}`)
      .set({
        id: dummySearchHistory.id,
        history: dummySearchHistory.history,
        time: DateToTimestamp(dummySearchHistory.time),
      });
  });
};

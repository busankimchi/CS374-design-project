import firebase from 'firebase';
import { Question } from 'utils/types';

export const getQuestionList = async (questionIds: number[]): Promise<Question[]> => {
  // const questionConverter = (item): Question => {
  //   // const answerContent;
  //   const questionContent = {
  //     content: item.question.content,
  //     image: item.question.image,
  //     name: item.question.name,
  //     time: item.question.time,
  //     title: item.question.title
  //   } as QuestionContent;
  //   if(item.answers){
  //     for (let i=0; i< item.answers.size; i++){
  //       const answerContent = {
  //         content: item.answers,
  //         image: item.answers,
  //         name: item.answers,
  //         time: item.answers.
  //       }
  //     }

  //   }
  //   {
  //     questionId: item.questionId,
  //     topic: item.topic,
  //     subtopic: item.subtopic,
  //     isFaq: item.isFaq,
  //   }
  // }
  const questionRef = firebase.firestore().collection('questions');
  // const questionList = questionRef.where("questionId", "in", questionIds);
  const snapshot = await questionRef.get();
  // const data =

  // const questionList = snapshot.docs.map((item) => {
  //   const data = item.data() as Question;
  //   if (data.questionId in questionIds) {
  //     return data;
  //   }
  // });
  const questionListCustom = [] as Question[];
  snapshot.docs.filter((item) => {
    const data = item.data() as Question;
    if (questionIds.includes(data.questionId)) {
      questionListCustom.push(data);
    }
    return data as Question;
  });

  return questionListCustom;
};

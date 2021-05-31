import firebase from 'firebase';
import { Question } from 'utils/types';
import { TimestampToDate } from 'utils/functions';

interface FetchQuestionListResponse {
  questionList: Question[];
  maxQuestionId: number;
}

export const fetchQuestionList = async (): Promise<FetchQuestionListResponse> => {
  const questionsRef = firebase.firestore().collection('questions');
  const snapshot = await questionsRef.orderBy('questionId').get();

  // TODO: convert Timestamp to Date
  const questionList = snapshot.docs.map((doc) => {
    const data = { ...doc.data() } as Question;
    data.question.time = TimestampToDate(doc.data().question.time);
    for (let i = 0; i < data.answers.length; i += 1) {
      data.answers[i].time = TimestampToDate(doc.data().answers[i].time);
    }
    return data;
  });

  const maxQuestionId = MaxIdfromArray(questionList);

  return { questionList, maxQuestionId };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MaxIdfromArray = (array: any[]) => Math.max(...array.map((item) => item.id));

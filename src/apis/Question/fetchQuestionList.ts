import firebase from 'firebase';
import { Question } from 'utils/types';

interface FetchQuestionListResponse {
    questionList: Question[];
    maxQuestionId: number;
  }
  
  export const fetchQuestionList = async (): Promise<FetchQuestionListResponse> => {
    const questionsRef = firebase.firestore().collection('questions');
    const snapshot = await questionsRef.orderBy('questionId').get();
    

    // TODO: convert Timestamp to Date
    const questionList = snapshot.docs.map((doc) => {
      const data = { ...doc.data(),  } as Question;
      return data;
    });
  
    const maxQuestionId = MaxIdfromArray(questionList);
    
    return { questionList, maxQuestionId };
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MaxIdfromArray = (array: any[]) => Math.max(...array.map((item) => item.id));
  
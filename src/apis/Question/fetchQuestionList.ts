import firebase from 'firebase';
import { QuestionContent, Topic } from 'utils/types';

interface FetchQuestionListResponse {
    questionList: QuestionContent[];
}

export const fetchQuestionList = async (): Promise<FetchQuestionListResponse> => {
    const questionsRef = firebase.firestore().collection('questions');
    const snapshot = await questionsRef.orderBy('questionID').get();
    const questionList = snapshot.docs.map((doc) => doc.data() as );
}
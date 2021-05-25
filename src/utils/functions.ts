import firebase from 'firebase';
import { Question, QuestionContent, AnswerContent } from './types'

export const timeForToday = (value: Date) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return 'just now';
  if (betweenTime < 60) {
    return `${betweenTime} mins. ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} hrs. ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay} days ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)} yrs. ago`;
}

export const TimestampToDate = (timestamp: firebase.firestore.Timestamp) => {
  return timestamp.toDate();
};

export const DateToTimestamp = (date: Date) => {
  return firebase.firestore.Timestamp.fromDate(date);
};

export const QuestionContentToObject = (question: QuestionContent) => {
  return {
    name: question.name,
    image: question.image,
    time: question.time,
    title: question.title,
    content: question.content,
  };
}

export const AnswerToObject = (answer: AnswerContent) => {
  return {
    name: answer.name,
    image: answer.image,
    time: answer.time,
    content: answer.content,
  };
}

export const AnswersToObject = (answers: Array<AnswerContent>) => {
  const ans: Array<Record<string, unknown>> = []
  answers.forEach((answer) => ans.push(AnswerToObject(answer)));
  return ans;
}

export const QuestionToObject = (question: Question) => {
  return {
    questionId: question.questionId,
    topic: question.topic,
    subtopic: question.subtopic,
    isFaq: question.isFaq,
    question: QuestionContentToObject(question.question),
    answers: AnswersToObject(question.answers),
  }
}
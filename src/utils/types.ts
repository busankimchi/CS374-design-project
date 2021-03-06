import firebase from 'firebase';

export interface QuestionContent {
  name: string;
  image: number;
  time: Date;
  title: string;
  content: string;
}

export interface QuestionContentFB {
  name: string;
  image: number;
  time: firebase.firestore.Timestamp;
  title: string;
  content: string;
}

export interface AnswerContent {
  name: string;
  image: number;
  time: Date;
  content: string;
}

export interface AnswerContentFB {
  name: string;
  image: number;
  time: firebase.firestore.Timestamp;
  content: string;
}

export interface Question {
  questionId: number;
  topic: string;
  subtopic: string;
  topicId: number;
  subtopicId: number;
  isFaq: boolean;
  question: QuestionContent;
  answers: AnswerContent[];
}
export interface QuestionFB {
  questionId: number;
  topic: string;
  subtopic: string;
  isFaq: boolean;
  question: QuestionContentFB;
  answers: AnswerContentFB[];
}

export interface Topic {
  id: number;
  topicName: string;
  subTopic?: SubTopic[];
}

export interface SubTopic {
  id: number;
  subTopicName: string;
  questionList?: number[];
}

export enum PageType {
  NONE,
  FAQ,
  ALL_QUESTIONS,
  NORMAL,
  SEARCH,
}
export interface MousePosition {
  x: null | number;
  y: null | number;
}

export interface HistoryQuery {
  id: number;
  history: string;
  time: Date;
}

export interface HistoryQueryFB {
  id: number;
  history: string;
  time: firebase.firestore.Timestamp;
}

export interface ParamProp {
  topicId?: string;
  subTopicId?: string;
  questionId?: string;
  questionId2?: string;
}

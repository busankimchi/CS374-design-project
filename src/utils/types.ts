export interface QuestionContent {
  name: string;
  image: number;
  time: Date;
  title: string;
  content: string;
}

export interface AnswerContent {
  name: string;
  image: number;
  time: Date;
  content: string;
}

export interface Question {
  questionId: number;
  topic: string;
  subtopic: string;
  isFaq: boolean;
  question: QuestionContent;
  answers: Array<AnswerContent>;
}

export interface Topic {
  id: number;
  docId?: string;
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
  ALL_QUESTONS,
  NORMAL,
  DUAL,
  SEARCH,
}
export interface MousePosition {
  x: null | number;
  y: null | number;
}

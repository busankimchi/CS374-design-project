export interface QuestionContent {
    topic: string;
    subtopic: string;
    name: string;
    image: number;
    time: Date;
    isFaq: boolean;
    title: string;
    content: string;
}

export interface AnswerContent {
    name: string;
    image: number;
    time: Date;
    content: string;
}

export interface Topic {
  id: number;
  topicName: string;
  subTopic?: SubTopic[];
}

export interface SubTopic {
  id: number;
  subTopicName: string;
}

export enum PageType {
  NONE,
  FAQ,
  ALL_QUESTONS,
  NORMAL,
  DUAL,
}
export interface MousePosition {
  x: null | number;
  y: null | number;
}

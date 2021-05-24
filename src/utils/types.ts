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
  FAQ,
  ALL_QUESTONS,
  NORMAL,
}
export interface MousePosition {
  x: null | number;
  y: null | number;
}

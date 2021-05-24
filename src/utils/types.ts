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

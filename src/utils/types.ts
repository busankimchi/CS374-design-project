export interface QuestionContent {
    topic: string;
    subtopic: string;
    name: string;
    image: number;
    time: Date;
    title: string;
    content: string;
};

export interface AnswerContent {
    name: string;
    image: number;
    time: Date;
    content: string;
};
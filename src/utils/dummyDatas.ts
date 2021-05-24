import { Topic } from './types';

export const dummyTopicList: Topic[] = [
  {
    id: 1,
    topicName: 'Project 1',
    subTopic: [
      {
        id: 1,
        subTopicName: 'alarm-clock',
      },
      {
        id: 2,
        subTopicName: 'submission',
      },
    ],
  },
  {
    id: 2,
    topicName: 'Threadsssssssssssssssssssssssss',
    subTopic: [
      {
        id: 3,
        subTopicName: 'atomic instruction',
      },
      {
        id: 4,
        subTopicName: 'semaphore',
      },
      {
        id: 5,
        subTopicName: 'synchronization',
      },
    ],
  },
  {
    id: 3,
    topicName: 'Lab sessions',
  },
  {
    id: 4,
    topicName: 'Logistics',
    subTopic: [
      {
        id: 6,
        subTopicName: 'schedules',
      },
      {
        id: 7,
        subTopicName: 'score announcement',
      },
      {
        id: 8,
        subTopicName: 'claimForFirstQuestion',
      },
    ],
  },
  {
    id: 5,
    topicName: 'Logisticzzzz',
    subTopic: [
      {
        id: 6,
        subTopicName: 'scheduleszzzzzzz',
      },
      {
        id: 7,
        subTopicName: 'score announcementzzzzzzzz',
      },
      {
        id: 8,
        subTopicName: 'claimForFirstQuestion!!',
      },
    ],
  },
];

export const dummySearchHistory: string[] = [
  'hello',
  'asdfgadsfasdfas',
  'adsflkdsjflksadjflkdasjflk',
  'alarm clock',
  'semaphore',
];

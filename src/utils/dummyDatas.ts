import { Topic, QuestionContent, AnswerContent } from './types';

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

export const dummyQuestion: QuestionContent = {
  topic: 'Project 1',
  subtopic: 'Alarm-clock',
  name: 'Cheese Burger',
  image: 0,
  time: new Date(),
  isFaq: true,
  title: "Regarding 'disk.c'",
  content:
    'I had a question regarding disk.c. When I added line thread_yield in sema_up, disk.c failed to boot. I looked around the code but I could not understand why it was failing. Is it possible to ask for explanation? I know that interrupt_handler for disk uses sema_up but it did not satisfy me. If possible, I would want to have more detailed information about it. I guess it might be due to idle_thread. Since at the beginning no task is there, idle is running. Can we call thread_yield in idle thread?\n\nThank you.',
};

export const dummyAnswers: Array<AnswerContent> = [
  {
    name: 'Miles Davis',
    image: 1,
    time: new Date(),
    content:
      'Inside the thread_yield function, there is an ASSERT that checks whether the current context is not an interrupt context. (https://github.com/casys-kaist/pintos-kaist/blob/22e0ef57fa28d274fc72531a6bf76df78d3a4f8f/threads/thread.c#L302) This is because Interrupts do not have a backing process context in PintOS’s design. In other words, Interrupt contexts aren’t schedulable entities.',
  },
  {
    name: 'Bill Evans',
    image: 2,
    time: new Date(),
    content:
      'You can look at this also, \n\nhttps://stackoverflow.com/questions/1053572/why-kernel-code-thread-executing-in-interrupt-context-cannot-sleep\nAnd the comment says that the sema_up function can be called in an interrupt context. (https://github.com/casys-kaist/pintos-kaist/blob/8e59f2e37badee2259a8fe058ed048fd60f6f728/threads/synch.c#L104) So you need to properly call thread_yield function based on context.',
  },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Topic, Question, QuestionContent, AnswerContent, HistoryQuery } from './types';

// export const dummyTopicList: Topic[] = [
//   {
//     id: 1,
//     topicName: 'Project 1',
//     subTopic: [
//       {
//         id: 1,
//         subTopicName: 'alarm-clock',
//       },
//       {
//         id: 2,
//         subTopicName: 'submission',
//       },
//     ],
//   },
//   {
//     id: 2,
//     topicName: 'Threadsssssssssssssssssssssssss',
//     subTopic: [
//       {
//         id: 3,
//         subTopicName: 'atomic instruction',
//       },
//       {
//         id: 4,
//         subTopicName: 'semaphore',
//       },
//       {
//         id: 5,
//         subTopicName: 'synchronization',
//       },
//     ],
//   },
//   {
//     id: 3,
//     topicName: 'Lab sessions',
//   },
//   {
//     id: 4,
//     topicName: 'Logistics',
//     subTopic: [
//       {
//         id: 6,
//         subTopicName: 'schedules',
//       },
//       {
//         id: 7,
//         subTopicName: 'score announcement',
//       },
//       {
//         id: 8,
//         subTopicName: 'claimForFirstQuestion',
//       },
//     ],
//   },
//   {
//     id: 5,
//     topicName: 'Logisticzzzz',
//     subTopic: [
//       {
//         id: 6,
//         subTopicName: 'scheduleszzzzzzz',
//       },
//       {
//         id: 7,
//         subTopicName: 'score announcementzzzzzzzz',
//       },
//       {
//         id: 8,
//         subTopicName: 'claimForFirstQuestion!!',
//       },
//     ],
//   },
// ];

export const dummyTopics: Topic[] = [
  {
    id: 1,
    topicName: 'Logistics',
    subTopic: [
      {
        id: 1,
        subTopicName: 'Lab Submission',
        questionList: [5, 11, 27, 31],
      },
      {
        id: 2,
        subTopicName: 'Score',
        questionList: [2, 18, 19, 23, 29],
      },
      {
        id: 3,
        subTopicName: 'Tokens',
        questionList: [3, 20],
      },
      {
        id: 4,
        subTopicName: 'Team Matching',
        questionList: [1, 24, 36],
      },
    ],
  },
  {
    id: 2,
    topicName: 'Project 1',
    subTopic: [
      {
        id: 5,
        subTopicName: 'Environment Setup',
        questionList: [4, 6, 9, 12, 13],
      },
      {
        id: 6,
        subTopicName: 'Multilevel Feedback Queues',
        questionList: [7, 10, 14, 15],
      },
      {
        id: 7,
        subTopicName: 'Lists',
        questionList: [8],
      },
    ],
  },
  {
    id: 3,
    topicName: 'Threads',
    subTopic: [
      {
        id: 8,
        subTopicName: 'Semaphores',
        questionList: [16, 17],
      },
    ],
  },
  {
    id: 4,
    topicName: 'Project 2',
    subTopic: [
      {
        id: 9,
        subTopicName: 'Multi-oom',
        questionList: [22, 25, 28, 32, 34],
      },
      {
        id: 10,
        subTopicName: 'Fork',
        questionList: [21, 26, 33],
      },
      {
        id: 11,
        subTopicName: 'Extra Points',
        questionList: [30, 35],
      },
    ],
  },
];

export const dummySearchHistory: HistoryQuery[] = [
  {
    id: 1,
    history: 'hello',
    time: new Date(),
  },
  {
    id: 2,
    history: 'asdfgadsfasdfas',
    time: new Date(),
  },
  {
    id: 3,
    history: 'adsflkdsjflksadjflkdasjflk',
    time: new Date(),
  },
  {
    id: 4,
    history: 'alarm clock',
    time: new Date(),
  },
  {
    id: 5,
    history: 'semaphore',
    time: new Date(),
  },
];

export const dummyQuestions: Array<Question> = [
  // (Team Matching) Initial team matching
  {
    questionId: 1,
    topic: 'Logistics',
    subtopic: 'Team Matching',
    isFaq: false,
    question: {
      name: 'Curious Panda',
      image: 0,
      time: new Date('2021-03-15T03:24:00'),
      title: 'Team organization',
      content: 'How do we choose our team? Is there any fixed schedule about when to choose our teams?',
    },
    answers: [
      {
        name: 'Sleepy Bee',
        image: 4,
        time: new Date('2021-03-15T11:22:10'),
        content:
          'Please answer to this survey until 2020-03-26 23:59:59. If you don’t answer to this survey, you will do pintos project alone. You can work in groups of two or alone. If you have teammate, answer teammate’s student id to the team organization section’s Other. (One submission per team is enough.)',
      },
    ],
  },
  // (Score) Lab1 scoring
  {
    questionId: 2,
    topic: 'Logistics',
    subtopic: 'Score',
    isFaq: false,
    question: {
      name: 'Crispy Bread',
      image: 17,
      time: new Date('2021-03-16T15:54:07'),
      title: 'Pintos score',
      content: "Can we get full credit if we passed all tests in 'make check' command?",
    },
    answers: [
      {
        name: 'Spicy Pringles',
        image: 5,
        time: new Date('2021-03-18T10:32:27'),
        content:
          'Yes. If not mentioned explicitly, there will be no hidden test cases.\n\nBut we will run tests several times and you can get credit for a test case only if you pass the test in every run.',
      },
    ],
  },
  // (Tokens) Tokens
  {
    questionId: 3,
    topic: 'Logistics',
    subtopic: 'Tokens',
    isFaq: false,
    question: {
      name: 'Crying Pringles',
      image: 7,
      time: new Date('2021-03-17T10:43:12'),
      title: 'Can we update our submission after we finish with tokens?',
      content:
        "Currently I am working on COW, but don't think I can finish within today. Is it possible to submit a copy now and update it a few days later by using tokens?.",
    },
    answers: [
      {
        name: 'Happy Flowerpot',
        image: 8,
        time: new Date('2021-03-17T12:45:42'),
        content: 'I did so and got full points at lab2. just make sure you submit the google form.',
      },
      {
        name: 'Green Shirt',
        image: 9,
        time: new Date('2021-03-18T13:42:19'),
        content: 'Sure. If you have plenty of token, you can extend the deadline.',
      },
    ],
  },
  // (Environment setup)
  {
    questionId: 4,
    topic: 'Project 1',
    subtopic: 'Environment Setup',
    isFaq: false,
    question: {
      name: 'Happy Superman',
      image: 10,
      time: new Date('2021-03-19T12:01:12'),
      title: 'QEMU supporting problem',
      content:
        "I was following the instruction in CS330 project page-introduction-Getting Started.\nI got a 'TCG doens't support requested feature' error, andI don't know why this error happens.",
    },
    answers: [
      {
        name: 'Short Giraffe',
        image: 0,
        time: new Date('2021-03-20T19:11:13'),
        content: "That's a warning, not an error. Just ignoring it.",
      },
    ],
  },
  // (Lab submission) Lab1 submission
  {
    questionId: 5,
    topic: 'Logistics',
    subtopic: 'Lab Submission',
    isFaq: false,
    question: {
      name: 'Hot Spicy Burger',
      image: 3,
      time: new Date('2021-03-30T12:01:12'),
      title: 'about submit file name format',
      content:
        'As KLMS Notified, I want to make my file format as team_{Number}.tar.gz.\n\nBut with command TEAM={Number} make archive, it make  team{Number}.tar.gz. Without underbar. \n\nThen I have to change file name before upload klms?\n\nFollowing was uploaded notification.\n\nWe provide a command to make an archive file. Go to your pintos project root directory where you have threads, userprog, vm, filesys directory. Type TEAM=YOUR_TEAM_NUMBER make archive (e.g. TEAM=5 make archive). Then, you will have team_5.tar.gz in the same directory. Submit the archive file. DO NOT make duplicate submissions. One submission for a team is enough.',
    },
    answers: [
      {
        name: 'Enthusiasted Tortoise',
        image: 1,
        time: new Date('2021-04-02T09:51:14'),
        content:
          'Sorry for the inconsistency. We have updated the manual and klms. You are supposed to upload team{Number}.tar.gz (no underbar).',
      },
    ],
  },
  // (Environment setup)
  {
    questionId: 6,
    topic: 'Project 1',
    subtopic: 'Environment Setup',
    isFaq: false,
    question: {
      name: 'Red Hongsam',
      image: 11,
      time: new Date('2021-03-30T14:04:42'),
      title: 'Error Connecting to VPN on Mac',
      content:
        "Hello, Mac user here.\nI have logged in to https://kcloudvpn.kaist.ac.kr, downloaded the VPN profile, installed the profile on System Preferences, and installed the SecuwaySSL app. However, when I try to connect to the VPN URL, it always gives me an 'access failed' error (as pictured).\n\nCan anyone help me solve this problem?",
    },
    answers: [
      {
        name: 'Fast Anteater',
        image: 9,
        time: new Date('2021-03-30T16:32:40'),
        content: 'I downloaded the latest version of the U series, and it worked fine.',
      },
      {
        name: 'Red Hongsam',
        image: 11,
        time: new Date('2021-03-30T17:02:51'),
        content: "Solved, thanks! I used the latest M series and it didn't work, but it worked fine with U series.",
      },
    ],
  },
  // (MLFQ)
  {
    questionId: 7,
    topic: 'Project 1',
    subtopic: 'Multilevel Feedback Queues',
    isFaq: false,
    question: {
      name: 'Sad Pillow',
      image: 4,
      time: new Date('2021-04-01T10:24:22'),
      title: 'mlfqs/mlfqs-nice test case',
      content:
        "after 'make check' in server, I cannot see any output or some error messages related with mlfqs-nice test case, it just skipped and I got FAIL in two test cases.\n\nwhy I cannot see any output of these cases?\n\nand can I get some informations about what functions/codes should I fix to pass these cases?",
    },
    answers: [
      {
        name: 'Singing Puppet',
        image: 5,
        time: new Date('2021-04-02T10:45:26'),
        content:
          'If this problem is still persisting, I recommend placing ASSERT in the test cases to see where it is failing.',
      },
    ],
  },
  // (lists) P1 list
  {
    questionId: 8,
    topic: 'Project 1',
    subtopic: 'Lists',
    isFaq: false,
    question: {
      name: 'Snowy Town',
      image: 9,
      time: new Date('2021-04-03T16:13:59'),
      title: 'list_less_func type in list.h',
      content:
        "I don't understand few things of list_less_func type in lib/kernel/list.h\n 1. Explanation says list_less_func returns value, but where exactly the return value from? There's only typedef in list header. Anyone can explain where the comparing process occurs?\n2. What is auxiliary data means? What is its role?",
    },
    answers: [
      {
        name: 'Windy Lake',
        image: 10,
        time: new Date('2021-04-03T20:14:32'),
        content:
          "1. Its a typedef. i.e its just defining a new type. You have to implement the computation yourself.\n2. I'm not sure, but I think its just temporary value just in case you're computation in 1. requires some additional info.",
      },
    ],
  },
  // (Environment setup)
  {
    questionId: 9,
    topic: 'Project 1',
    subtopic: 'Environment Setup',
    isFaq: false,
    question: {
      name: 'Cynical Cactus',
      image: 12,
      time: new Date('2021-04-05T11:11:42'),
      title: 'pintOS make problem',
      content:
        "I don't know why this gcc error happen. It just tays that target 'all' and target 'threads/init.o' fails.",
    },
    answers: [
      {
        name: 'Orange Mushroom',
        image: 13,
        time: new Date('2021-04-05T19:10:12'),
        content:
          "at the pintos root directory,\n\ntry 'source ./install.sh' this seemed to install GCC in my case.\nI think this a shell script made by pintos-kaist to make installing easier.\nand also don't forget to do 'source ./activate' at login.\n\nand 'distclean' before trying 'make' again",
      },
    ],
  },
  // (MLFQ)
  {
    questionId: 10,
    topic: 'Project 1',
    subtopic: 'Multilevel Feedback Queues',
    isFaq: false,
    question: {
      name: 'Kim Wang',
      image: 6,
      time: new Date('2021-04-06T21:01:40'),
      title: 'kernel panic error at mlfqs test case',
      content:
        'I got this kind of error. It says that I have kernel panic at ../../tests/threads/tests/c:93. Can anyone tell me why this kind of error happens?',
    },
    answers: [
      {
        name: 'Overslept Spider',
        image: 7,
        time: new Date('2021-04-07T03:12:45'),
        content:
          'We will never debug your code, and we can’t do so with only kernel panic message.\nThe only thing we can tell you with the message is that: the call stack seems strange since call stack include pass() function. However when you see the call stack you can find the line number 99 which is the end line of function fail.\nThe actual call stack is main->run_actions->...->fail->debug_panic.',
      },
    ],
  },
  // (Lab submission) Lab1 submission
  {
    questionId: 11,
    topic: 'Logistics',
    subtopic: 'Lab Submission',
    isFaq: false,
    question: {
      name: 'Cheese Burger',
      image: 0,
      time: new Date('2021-04-07T23:23:06'),
      title: 'Where to submit',
      content: 'Where can we submit the targ.gz file if we are done with project1?',
    },
    answers: [
      {
        name: 'Fast Mouse',
        image: 1,
        time: new Date('2021-04-08T03:12:07'),
        content: 'KLMS Lab1 submission is now open. Please read the manual first.',
      },
    ],
  },
  // (Environment setup)
  {
    questionId: 12,
    topic: 'Project 1',
    subtopic: 'Environment Setup',
    isFaq: false,
    question: {
      name: 'Green Mushroom',
      image: 14,
      time: new Date('2021-04-09T12:23:06'),
      title: 'install.sh stops during binfmt-support setup',
      content:
        "I've run the install.sh, but after the line:\n\nSetting up binfmt-support (2.1.8-2)\n\nit just freezes. I tried different approaches from the web and messed with some process stopping, killing and restarting afterwards, however I couldn't solve it. What can I do about the problem?",
    },
    answers: [
      {
        name: 'Purple Octopus',
        image: 15,
        time: new Date('2021-04-09T14:40:16'),
        content: 'We can reset your VM. Email us your VM information if you want to reset.',
      },
      {
        name: 'Brown Hog',
        image: 16,
        time: new Date('2021-04-09T18:01:46'),
        content: 'Is it possible to provide install.sh for ubuntu 20.04? I could not run proj 2 in my pc.',
      },
    ],
  },
  // (Environment setup)
  {
    questionId: 13,
    topic: 'Project 1',
    subtopic: 'Environment Setup',
    isFaq: false,
    question: {
      name: 'Happy Slime',
      image: 17,
      time: new Date('2021-04-14T10:22:00'),
      title: 'kcloud vpn error',
      content:
        "I the message that I can't access with the current user ID TT\nhow can I fix it?\nI reinstalled the kcloudvpn for mistake. Maybe this is why it causes it?",
    },
    answers: [
      {
        name: 'Happy Slime',
        image: 17,
        time: new Date('2021-04-14T17:22:00'),
        content: 'Also, Is there a way to find my password? I forgot it...',
      },
      {
        name: 'Green Octopus',
        image: 18,
        time: new Date('2021-04-15T12:42:10'),
        content: 'I recommend contacting kcloud vpn at kcl***@kaist.ac.kr',
      },
    ],
  },
  // (MLFQ)
  {
    questionId: 14,
    topic: 'Project 1',
    subtopic: 'Multilevel Feedback Queues',
    isFaq: false,
    question: {
      name: 'Smily Kahlua',
      image: 2,
      time: new Date('2021-04-16T11:42:20'),
      title: 'time quantum for mlfq',
      content:
        "The document says that\n'If the highest-priority queue contains multiple threads, then they run in round robin order.'\nThen, what is the time_quantum of the RR? Do we have to define it by ourselves?",
    },
    answers: [
      {
        name: 'Singing Jungwoo',
        image: 3,
        time: new Date('2021-04-16T15:31:16'),
        content:
          'In threads/thread.c, there is a macro defined global var named TIME_SLICE. It is defined as 4, which is 4 ticks (4ms).',
      },
      {
        name: 'Smily Kahlua',
        image: 2,
        time: new Date('2021-04-16T18:15:20'),
        content: "then is our mlfq's time_slice never changed by priority of each queue?",
      },
      {
        name: 'Brown Eyed King',
        image: 4,
        time: new Date('2021-04-17T01:12:20'),
        content: 'It can change. For instance, if new thread created after 3 ticks, we make thread_yield().',
      },
    ],
  },
  // (MLFQ)
  {
    questionId: 15,
    topic: 'Project 1',
    subtopic: 'Multilevel Feedback Queues',
    isFaq: false,
    question: {
      name: 'Dancing Robot',
      image: 8,
      time: new Date('2021-04-17T12:02:12'),
      title: 'contention for MLFQ lock',
      content:
        "In the textbook-multiprocessor scheduling, it says\n'Depending on how much computation each thread does before blocking on I/O, the centralized lock may become a bottleneck'\n'Can anyone explain about this more deeply? I can't understand this sentence.",
    },
    answers: [],
  },
  // (Semaphore) P1
  {
    questionId: 16,
    topic: 'Threads',
    subtopic: 'Semaphores',
    isFaq: false,
    question: {
      name: 'Green Glasses',
      image: 0,
      time: new Date('2021-04-18T12:12:32'),
      title: 'One thread waiting for 2 semaphores?',
      content:
        "I used semaphore for process_wait.\n\nNow I'm trying to use another semaphore on fork, \n\nbut because of the structure of sema_down, the kernel panics with \n\nfail in assertion THREAD_RUNNING in thread_current().\n\nShould I use semaphore only in wait or only in fork, not both?\n\nIf not, how can I resolve this problem?\n\nThank you.",
    },
    answers: [
      {
        name: 'Black iPhone',
        image: 10,
        time: new Date('2021-04-19T15:13:12'),
        content:
          'You are free to decide where to use the semaphore. It would be nice to take a look at the code again and check the problems of your own implementation.',
      },
      {
        name: 'Pink Galaxy',
        image: 11,
        time: new Date('2021-04-18T19:11:02'),
        content: 'Any person having same struggle, or any suggestions?',
      },
    ],
  },
  // (Semaphore) P1
  {
    questionId: 17,
    topic: 'Threads',
    subtopic: 'Semaphores',
    isFaq: false,
    question: {
      name: 'Gray Mushroom',
      image: 12,
      time: new Date('2021-04-18T15:11:42'),
      title: 'sema_down() and sema_up',
      content:
        "We've been trying to use semaphores to implement following in fork():\n'Parent process should never return from the fork until it knows whether the child process successfully cloned'\n\nBut using gdb, we found out gdb doesn't progress after a sema_down() call, whether argument (&parent->sema) or (&child->sema)\n\nlooking at sema_down() code, we found it does 'thread_current->status = BLOCKED'\nand this is why gdb does not progress anymore.\n\nAnyone suggestion on how we can debug this ?",
    },
    answers: [
      {
        name: 'Pink Octopus',
        image: 11,
        time: new Date('2021-04-18T15:19:42'),
        content: 'Are you sure you downed the seam after you do thread_create ()?',
      },
      {
        name: 'Happy Galaxy',
        image: 15,
        time: new Date('2021-04-18T21:11:42'),
        content: "did u make 'sema_init'?",
      },
    ],
  },
  // (Score) Lab1 score announcement
  {
    questionId: 18,
    topic: 'Logistics',
    subtopic: 'Score',
    isFaq: false,
    question: {
      name: 'Overheated GPU',
      image: 14,
      time: new Date('2021-04-20T12:10:21'),
      title: 'Scores for project 1',
      content: 'Is there an estimated date for which the scores of project 1 will be announced?',
    },
    answers: [
      {
        name: 'Cool Vodka',
        image: 6,
        time: new Date('2021-04-20T18:10:21'),
        content: 'We try to release the lab1 score this week',
      },
    ],
  },
  // (Score) Lab1 claim
  {
    questionId: 19,
    topic: 'Logistics',
    subtopic: 'Score',
    isFaq: false,
    question: {
      name: 'Sleepy Cat',
      image: 16,
      time: new Date('2021-04-21T10:11:21'),
      title: 'Lab 1 Claim Session',
      content: 'I have some claim about the lab 1 score. Would there be any claim sessions?',
    },
    answers: [
      {
        name: 'Blue Wine',
        image: 1,
        time: new Date('2021-04-21T11:11:21'),
        content:
          'If you have any claim about the lab1 score, please give a mail to cs3*****@c****.kaist.ac.kr by 4/14 (wed).\n\nPlease include your team number in the claim email.',
      },
    ],
  },
  // (Tokens) Tokens
  {
    questionId: 20,
    topic: 'Logistics',
    subtopic: 'Tokens',
    isFaq: false,
    question: {
      name: 'Smiling Textbook',
      image: 12,
      time: new Date('2021-04-24T15:21:26'),
      title: 'Token usage',
      content:
        'Dear TA,\nOur team used 1 token yesterday. We just make some more improvements and would like to use 1 more token.\nShould our team make a new response to Google Form, or simply modify the previous response?',
    },
    answers: [
      {
        name: 'Grinning Pringles',
        image: 9,
        time: new Date('2021-04-24T17:21:26'),
        content:
          'It says in the syllabus that you should modify the previous response. The link for it should be in your receipt',
      },
    ],
  },
  // (Fork)
  {
    questionId: 21,
    topic: 'Project 2',
    subtopic: 'Fork',
    isFaq: false,
    question: {
      name: 'Crispy Nugget',
      image: 0,
      time: new Date('2021-04-24T17:21:26'),
      title: 'Semantics of system call `fork ()`',
      content:
        'Currently, I think that the correct semantics of system call fork () will be to just call process_fork (). One question I had was that what should be the second input of process_fork ()? I considered two options.\n\n1. The tf field of thread_current ().\n2. The intr_frame *f argument given to syscall_handler ().\n\nI thought the first part was weird because in the comments of __do_fork (), it said we had to ‘get the second argument of process_fork () into this function’, but is unnecessary if we just use the tf field as the second argument anyway.\n\nThe second seemed weird as the f argument is essentially already ‘used’ by the current system call, so making a new thread that will have a used up intr_frame seemed meaningless.\n\nWhich one of these options is correct? If both of them are wrong, what are the correct semantics?',
    },
    answers: [
      {
        name: 'Chilly Corn Carne',
        image: 3,
        time: new Date('2021-04-24T18:20:46'),
        content:
          "Fork is a system call that makes a new process by duplicating the caller process.\nIn other words, a new process from forking has the same register state (except rax) after forking.\nThat is, you need to pass the register state of the parent process (i.e. second argument of process_fork) to the child process and then start the child process from the parent's register state.",
      },
      {
        name: 'Crispy Nugget',
        image: 0,
        time: new Date('2021-04-24T18:31:26'),
        content:
          'So just for clarification, the ‘register state of the parent process’ is the intr_frame *f passed to syscall_handler ()?',
      },
      {
        name: 'Chilly Corn Carne',
        image: 3,
        time: new Date('2021-04-24T20:21:26'),
        content: 'yes.',
      },
      {
        name: 'Crispy Nugget',
        image: 0,
        time: new Date('2021-04-24T20:51:26'),
        content: 'Thank you very much!',
      },
    ],
  },
  // (Multi-oom)
  {
    questionId: 22,
    topic: 'Project 2',
    subtopic: 'Multi-oom',
    isFaq: false,
    question: {
      name: 'Cynical Mushroom',
      image: 8,
      time: new Date('2021-04-25T10:21:26'),
      title: 'multi-oom test',
      content:
        'In the multi-oom test, each child process open 126 files and fork() again.\nAlso, child process should duplicate FD table of its parent.\nThen, in the test, child1 will open 126 files, child2 open 126*2 files, child3 open 126*3 files and so on.\nAfter N depth, there will be 63*N*(N+1) opened files. Is it reasonable?',
    },
    answers: [
      {
        name: 'Clean Vodka',
        image: 9,
        time: new Date('2021-04-25T10:50:24'),
        content:
          'No, I think child1 open 126 files, child2 open 126 files, child3 open 126 files,,,\n\nso after N depth, 126 * N files are opened.',
      },
    ],
  },
  // (Score) Lab2 scoring criteria
  {
    questionId: 23,
    topic: 'Logistics',
    subtopic: 'Score',
    isFaq: false,
    question: {
      name: 'Red Doge',
      image: 18,
      time: new Date('2021-04-26T15:20:26'),
      title: 'what is extra point?',
      content:
        'There are extra projects in every project.\nIn project2, dup2 have 20% score.\nIf I pass all dup2 cases, then can I get 120pt in project2?\n\nOur pintos score is 50% of the course criteria. \nIf I get extra points, then my lab score can be over 50%?',
    },
    answers: [
      {
        name: 'Blue Doge',
        image: 0,
        time: new Date('2021-04-26T16:20:26'),
        content: 'Yes lab score can be over 50 if you get full credit and some extra credit in pintos.',
      },
      {
        name: 'Red Doge',
        image: 18,
        time: new Date('2021-04-26T16:40:26'),
        content:
          "Then, can our final score(lab + final exam score) be > 100 ?\nIf it is, I think it's not an extra credit since it is relative grading...",
      },
      {
        name: 'Blue Doge',
        image: 0,
        time: new Date('2021-04-26T20:20:26'),
        content:
          'Yes final score can be greater than 100 if you get almost perfect score in final exam.\nBut we believe it will not happen. For last year, there was no one who get final score greater than 100.',
      },
    ],
  },
  // (Team Matching) Dropped Teammate
  {
    questionId: 24,
    topic: 'Logistics',
    subtopic: 'Team Matching',
    isFaq: false,
    question: {
      name: 'Curious Octopus',
      image: 1,
      time: new Date('2021-04-26T15:20:26'),
      title: 'Team Re-organization',
      content:
        'Are there any updates on team re-organization? My teammate dropped the class, and I want to find a new teammate and start working.',
    },
    answers: [
      {
        name: 'Handsome Cat',
        image: 18,
        time: new Date('2021-04-26T20:20:26'),
        content:
          'If your teammate dropped this course and you want a new teammate, please answer this survey by 05/11.\nhttps://docs.google.com/forms/d/e/XXXXXXXXXXX-XXXXXX-XXXXX-XXXXXXXXX/viewform',
      },
    ],
  },
  // (Multi-oom)
  {
    questionId: 25,
    topic: 'Project 2',
    subtopic: 'Multi-oom',
    isFaq: false,
    question: {
      name: 'Green Hongsam',
      image: 10,
      time: new Date('2021-05-06T15:20:26'),
      title: 'question about meaning of multi-oom test case',
      content:
        "We got some error from the multi-oom test case. It looks like crashed child(some child process which its name ends with '_X') should be exit with exit_code of -1.\n\nAm I getting it right?\nIf I am right, then why messages like 'child_6_X: exit(-1)' printed? and where is the code which print this messages.",
    },
    answers: [
      {
        name: 'Hot Khalua',
        image: 13,
        time: new Date('2021-05-06T18:20:26'),
        content:
          'if pid > 0, then it literally means that currently running process is parent process. Since child processes are terminated because of some bad instructions that might result in crash (bad pointer references or something), they should be terminated with their return value as -1, which means error. So outputs above completely make sense.',
      },
      {
        name: 'Green Hongsam',
        image: 10,
        time: new Date('2021-05-06T20:20:26'),
        content: 'I understood what you said. thank you!',
      },
    ],
  },
  // (Fork)
  {
    questionId: 26,
    topic: 'Project 2',
    subtopic: 'Fork',
    isFaq: false,
    question: {
      name: 'Central Park',
      image: 18,
      time: new Date('2021-05-06T20:20:26'),
      title: 'fork problem',
      content:
        "We're currently implementing fork, and we're stuck at this error for a long time.\nWe did implement duplication of register values, page table, and file descriptors.\nWe're curious if this comes from do_iret().\nWe are aware that this kind of question might be unable to answer, but if any of you encountered this error and solved it, please share the knowledge.",
    },
    answers: [
      {
        name: 'Sour Pringles',
        image: 6,
        time: new Date('2021-05-06T20:50:26'),
        content:
          'I spend time for that problem 50hours(8days). modify code as not call PANIC.\nI recommand you solve exec first, exec has highly relation with fork',
      },
      {
        name: 'Hungry Dinosaur',
        image: 7,
        time: new Date('2021-05-21T20:20:26'),
        content: 'Hi did you solved problem?',
      },
    ],
  },
  // (Lab submission) Lab2 submission
  {
    questionId: 27,
    topic: 'Logistics',
    subtopic: 'Lab Submission',
    isFaq: false,
    question: {
      name: 'Hot Snowman',
      image: 7,
      time: new Date('2021-05-07T12:20:26'),
      title: 'Question regarding submission',
      content:
        "Hello, I'm just wondering if I should explicitly mark that my implementation includes EXTRA part.\nI know that we should uncomment lower part of Make.vars file to test EXTRA part.\nSo, If I uncomment Make.vars file and submit archive file, then will it be automatically graded including EXTRA part?\n\nThanks in advance !",
    },
    answers: [
      {
        name: 'Red Sunglasses',
        image: 1,
        time: new Date('2021-05-07T14:20:26'),
        content: 'You are right. Make an archive with the lines uncommented, then the extra part will be graded.',
      },
    ],
  },
  // (Multi-oom)
  {
    questionId: 28,
    topic: 'Project 2',
    subtopic: 'Multi-oom',
    isFaq: false,
    question: {
      name: 'Hot Crispy',
      image: 15,
      time: new Date('2021-05-07T16:20:26'),
      title: 'multi-oom',
      content:
        'In multi oom test case, output is stuck in child_n_X. When I add appropriate free in my code, n goes up, but child_{}_O is never printed.\nWhat is the possible problem ??? is it due to the memory usage?? ',
    },
    answers: [
      {
        name: 'Fried Wagyu',
        image: 16,
        time: new Date('2021-05-07T20:20:26'),
        content: 'Deadlock may be an issue',
      },
      {
        name: 'Hungry Teammate',
        image: 18,
        time: new Date('2021-05-09T16:20:26'),
        content:
          'In multi-oom test case, it produces childs until fork fail(fork return -1) . After that, parent waiting is finished and child_{}_O will be printed. So you have to check fork fail, and wait algorithm, and additionally open fail.',
      },
    ],
  },
  // (Score) Lab2 grading criteria
  {
    questionId: 29,
    topic: 'Logistics',
    subtopic: 'Score',
    isFaq: false,
    question: {
      name: 'Sad Doge',
      image: 11,
      time: new Date('2021-05-09T11:29:26'),
      title: 'Grading criteria for extra part',
      content:
        'We are currently working with extra parts of Project3. \n\nIn the case of we don’t get full credit for the base cases(100points), we won’t get any scores from extra parts even if we implemented it?',
    },
    answers: [
      {
        name: 'Dummy Dum',
        image: 3,
        time: new Date('2021-05-09T18:29:26'),
        content: 'As mentioned before, you can get partial credit for extra credit, if you pass some test cases.',
      },
    ],
  },
  // (P2 Extra)
  {
    questionId: 30,
    topic: 'Project 2',
    subtopic: 'Extra Points',
    isFaq: false,
    question: {
      name: 'Spicy Bonjuk',
      image: 5,
      time: new Date('2021-05-09T19:29:26'),
      title: 'about dup2-complex test case',
      content:
        "In dup2-complex test case, the program seeks with a closed file in child process.\nHow last seek can work? fd4 is already closed, so isn't it cause an error?",
    },
    answers: [
      {
        name: 'Smart Tablet',
        image: 17,
        time: new Date('2021-05-09T23:29:26'),
        content:
          'Maybe if you try to seek closed file_descriptor, kernel will occur error. So you have to check it in syscall.',
      },
    ],
  },
  // (Lab submission) Lab2 submission
  {
    questionId: 31,
    topic: 'Logistics',
    subtopic: 'Lab Submission',
    isFaq: false,
    question: {
      name: 'Large Pillow',
      image: 13,
      time: new Date('2021-05-10T11:29:26'),
      title: 'Project 2 submission?',
      content: 'When will the assignment for the 2nd project be open? I don’t see one in KLMS yet.',
    },
    answers: [
      {
        name: 'Shiny Airpods',
        image: 12,
        time: new Date('2021-05-10T21:29:26'),
        content: 'It’s open now.',
      },
    ],
  },
  // (Multi-oom)
  {
    questionId: 32,
    topic: 'Project 2',
    subtopic: 'Multi-oom',
    isFaq: false,
    question: {
      name: 'Hot Dog',
      image: 14,
      time: new Date('2021-05-18T15:29:26'),
      title: 'how many child open in your multi-oom subtask?',
      content:
        'my code open 36->36->36->36->36->36->35 due to memory management code, it event due to just one of temporal 60 byte local variable\n\nalso, is there malloc reservation method?',
    },
    answers: [
      {
        name: 'Delightful Chrome',
        image: 17,
        time: new Date('2021-05-19T12:29:26'),
        content: 'In my case 45, 236 depending on how implementing the file descriptor.\nAlso, 176 during extra task.',
      },
      {
        name: 'Overflowed Firebase',
        image: 18,
        time: new Date('2021-05-20T13:23:26'),
        content:
          '45, 36 was for me. If you are doing extra, you may be not doing a free. I had the same problem and doing an extra free solved it.',
      },
    ],
  },
  // (Fork)
  {
    questionId: 33,
    topic: 'Project 2',
    subtopic: 'Fork',
    isFaq: false,
    question: {
      name: 'Crispy Cream',
      image: 7,
      time: new Date('2021-05-21T15:29:26'),
      title: 'page fault while fork',
      content:
        "In my implementation, parent wait until child's __do_fork () ends.\n\nHowever, in syn_read test it sometimes occurs page fault while __do_fork (), so the parent can't wake up.\nIs page fault while fork is normal behavior?",
    },
    answers: [
      {
        name: 'Star Craft',
        image: 3,
        time: new Date('2021-05-21T19:29:26'),
        content:
          'No, there should be no page fault until you start lab 3, except for some cases like bad-read, bad-write.\nYou should debug your implementation.',
      },
    ],
  },
  // (Multi-oom)
  {
    questionId: 34,
    topic: 'Project 2',
    subtopic: 'Multi-oom',
    isFaq: false,
    question: {
      name: 'Sleepy Piranha',
      image: 11,
      time: new Date('2021-05-23T15:29:26'),
      title: 'multi-oom infinite loop',
      content:
        'I was trying to do multi-oom. For me, for loop never ends. I looked to the test case, I could not figure out how terminates the for loop. Could you explain how it should behave? And if possible, what is going wrong in my implementation?',
    },
    answers: [
      {
        name: 'Blue Mushroom',
        image: 16,
        time: new Date('2021-05-23T21:29:26'),
        content:
          'If you have an infinite loop, I recommend to add your own printf to check. In terms of where it can go wrong, fork and wait has way too much room for error… the most basic one I can think of is deadlock, so check your lock usage',
      },
      {
        name: 'Pink Hongsam',
        image: 13,
        time: new Date('2021-05-24T13:29:26'),
        content: 'Did you solve these multi-oom infinite loop problem? I think we have same situation above',
      },
      {
        name: 'Sleepy Piranha',
        image: 11,
        time: new Date('2021-05-24T17:29:26'),
        content: 'Memory leak. Another problem, put a restriction from creating infinite childs',
      },
    ],
  },
  // (P2 Extra)
  {
    questionId: 35,
    topic: 'Project 2',
    subtopic: 'Extra Points',
    isFaq: false,
    question: {
      name: 'Cynical Potato',
      image: 2,
      time: new Date('2021-05-24T13:22:16'),
      title: "How can I use '#ifdef EXTRA2' for dup2?",
      content:
        "How can I use '#ifdef EXTRA2' for dup2?\n\nI wrote the code as below, but it seems that it doesn't work.\nI want to use this code inside the syscall.c function. Is this the problem?\nHow can I use this ?",
    },
    answers: [
      {
        name: 'Young Airpod',
        image: 15,
        time: new Date('2021-05-24T17:22:16'),
        content: 'To submit and test your extra requirements, you will need to edit userprog/Make.vars.',
      },
    ],
  },
  // (Team Matching) Dropped Teammate
  {
    questionId: 36,
    topic: 'Logistics',
    subtopic: 'Team Matching',
    isFaq: false,
    question: {
      name: 'Smiling Parrot',
      image: 7,
      time: new Date('2021-05-25T12:22:16'),
      title: 'Teammate dropped the course',
      content:
        'My teammate has dropped the course today and I saw the form for new teammate is only due 04/30. What should I do? My student ID is 20******.',
    },
    answers: [
      {
        name: 'Spicy Bee',
        image: 3,
        time: new Date('2021-05-25T21:22:16'),
        content: 'We will do that again for lab3. Wait for the new announcement.',
      },
    ],
  },
];

export const testUserName = 'Cheesy Pringles';

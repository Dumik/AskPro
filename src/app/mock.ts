import {User} from './mockTypes';

export const users: User[] = [
  {
    id: '1',
    name: 'Oleg',
    username: 'dumik29',
    email: 'dumik.adev@gmail.com',
    avatar: 'https://picsum.photos/id/258/500/900',
    bgPhoto: 'https://picsum.photos/id/200/150',
    followers: 0,
    gifts: 0,
    likes: 0,
    questions: [
      {
        question: 'question',
        author: 'Oleg',
        date: new Date('2023-12-9'),
      },
      {
        question: 'How sre you',
        author: null,
        date: new Date('2023-12-2'),
      },
    ],
    posts: [
      {
        question: {
          question: 'question',
          author: 'Oleg',
          date: new Date('2023-12-9'),
        },
        answer: '',
        photo: '',
        likes: [],
        date: new Date('2023-12-9'),
      },
    ],
    following: [
      {
        id: '2',
        username: 'sonic',
        avatar: '',
      },
    ],
  },
  {
    id: '2',
    name: 'Taras',
    username: 'sonic',
    email: 'pes@dog.com',
    avatar: 'https://picsum.photos/id/659/500/900',
    bgPhoto: 'https://picsum.photos/id/659/500/900',
    followers: 0,
    gifts: 0,
    likes: 0,
    questions: [
      {
        question: 'How sre you, dude?',
        author: null,
        date: new Date('2023-12-2'),
      },
    ],
    posts: [
      {
        question: {
          question: 'question',
          author: 'Oleg',
          date: new Date('2023-12-9'),
        },
        answer: 'text',
        photo: 'https://picsum.photos/id/659/500/900',
        likes: [],
        date: new Date('2023-12-9'),
      },
    ],
    following: [
      {
        id: '1',
        username: 'dumik',
        avatar: 'https://picsum.photos/id/258/500/900',
      },
    ],
  },
  {
    id: '3',
    name: 'lyoha',
    username: 'lyoha',
    email: 'lyoha@gmail.com',
    avatar: 'https://picsum.photos/id/158/500/900',
    bgPhoto: 'https://picsum.photos/id/218/500/900',
    followers: 0,
    gifts: 0,
    likes: 0,
    questions: [
      {
        question: 'How sre you',
        author: null,
        date: new Date('2023-12-2'),
      },
    ],
    posts: [
      {
        question: {
          question: 'question',
          author: 'Oleg',
          date: new Date('2023-12-9'),
        },
        answer: 'https://picsum.photos/id/58/500/900',
        photo: 'https://picsum.photos/id/28/500/900',
        likes: [],
        date: new Date('2023-12-9'),
      },
    ],
    following: [
      {
        id: '',
        username: '',
        avatar: '',
      },
      {
        id: '1',
        username: 'dumik',
        avatar: 'https://picsum.photos/id/258/500/900',
      },
    ],
  },
];

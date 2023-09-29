export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bgPhoto: string;
  followers: number;
  gifts: number;
  likes: number;
  questions: Question[];
  posts: Post[];
  following: Follower[];
}

export interface Follower {
  id: string;
  username: string;
  avatar: string;
}

// export interface Answer {
//   question: string;
//   answer: string;
//   user: string | null;
//   date?: Date;
// }

export interface Question {
  question: string;
  author: string | null;
  date?: Date;
  avatar?: string | null;
}

export interface Post {
  question: Question;
  answer: string;
  photo: string | null;
  likes: Liker[];
  date: Date;
}

export interface Liker {
  author: string;
}

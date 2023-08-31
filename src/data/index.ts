export interface Auth {
   access_token: string;
  refresh_token: string;
}
export interface Hamburger {
  isOpen: boolean;
}

export interface User {
  username: string;
  email: string;
  createdAt: Date;
  verified: boolean;
  badge: { name: string };
  lastLogin: Date;
  pfp: string;
  bio: string;
  socialLinks: string[];
  likedThreads: string[];
  dislikedThreads: string[];
  likedComments: string[];
  dislikedComments: string[];

  followers: {
    username: string;
    pfp: string;
  }[];
  following: {
    username: string;
    pfp: string;
  }[];

  role: {
    name: string;
  };
  comments: {
    content: string;
    views: number;
    createdAt: Date;
    reactionCount: number;
  }[];
  threads: {
    title: string;
    views: number;
    createdAt: Date;
    reactionCount: number;
  }[];  
}

export type RootState = {
  auth: Auth;
  drawer: Hamburger;
};

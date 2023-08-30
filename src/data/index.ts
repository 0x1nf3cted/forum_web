export interface Auth {
    user: User;
    access_token: string;
    refresh_token: string;

  }
  export interface Hamburger {
    isOpen : boolean
}
  
  export interface User {
    username: string;
    email?: string;
    lastLogin?: Date;
    bio?: string;
    socialLinks?: string[];
    likedThreads?: string[];
    dislikedThreads?: string[];
    likedComments?: string[];
    dislikedComments?: string[];
    role?: string;
    badge?: string;
    score?: number;
    active?: boolean;
  }

  export type RootState = {
    auth: Auth,
    drawer: Hamburger
  }
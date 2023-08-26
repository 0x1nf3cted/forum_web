// Import necessary dependencies if needed

// Define the TypeScript interfaces for your Prisma models
interface User {
  id: string;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  verified?: boolean | null;
  muted?: boolean | null;
  lastLogin: Date;
  pfp?: string | null;
  bio?: string | null;
  socialLinks?: string[];
  likedThreads?: string[];
  dislikedThreads?: string[];
  likedComments?: string[];
  dislikedComments?: string[];
  role: Role;
  badge?: Badge | null;
  roleId: string;
  badgeId?: string | null;
  Thread?: Thread[];
  Comment?: Comment[];
  score?: number | null;
  active: boolean | null;
}

interface Thread {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  content: string;
  tags: string[];
  reactionCount: number;
  modified: boolean;
  userId: string;
  views: number;
  featured: boolean;
  statues: string;
  coments: Comment[];
  author: User;
}

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  modified: boolean;
  userId: string;
  reactionCount: number;
  threadId: string;
  thread: Thread;
  author: User;
}

interface Role {
  id: string;
  name: UserRole;
  createdAt: Date;
  updatedAt?: Date;
  UserProfile: User[];
}

enum UserRole {
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
  CONTRIBUTOR = "CONTRIBUTOR",
  REGULAR_USER = "REGULAR_USER",
  NEW_USER = "NEW_USER",
  BANNED_USER = "BANNED_USER",
  BOT = "BOT",
  COMMUNITY_AMBASSADOR = "COMMUNITY_AMBASSADOR",
  MUTED_USER = "MUTED_USER",
}

interface Badge {
  id: string;
  name: UserBadge;
  createdAt: Date;
  updatedAt?: Date;
  UserProfile: User[];
}

enum UserBadge {
  STARTER = "STARTER",
  ACTIVE_POSTER = "ACTIVE_POSTER",
  HELPER = "HELPER",
  DAILY_CONTRIBUTOR = "DAILY_CONTRIBUTOR",
  ENGAGER = "ENGAGER",
  VERSATILE_POSTER = "VERSATILE_POSTER",
  EVENT_ORGANIZER = "EVENT_ORGANIZER",
  BADGE_COLLECTOR = "BADGE_COLLECTOR",
  THREAD_CHAMPION = "THREAD_CHAMPION",
  FEATURED_THREAD_ = "FEATURED_THREAD_",
}

 export { UserRole, UserBadge };
export type { User, Thread, Comment, Role, Badge };

export interface PostStats {
  id: string;
  commentCount: number;
  usersLiked: {
    [userId: string]: string;
  };
}

interface PostMetadata {
  id: string;
  authorId: string;
  created: number;
  lastModified?: number;
}

export interface PostPreview extends PostMetadata {
  title: string;
  summary?: string; // simple string, the first part of the text
  tags?: {
    [tagId: string]: true;
  };
}

export interface PostDetails {
  id: string;
  text: string; // html string
  comments?: {
    [commentId: string]: PostComment;
  };
}

export interface PostComment extends PostMetadata {
  text: string; // simple string
  quote?: {
    authorId: string;
    text: string;
    lastModified: number; // timestamp when the original comment was created or modified
  };
}

export interface Tag {
  id: string;
  name: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

/**
 * Databases
 * 
 * postStats
 * users
 * posts
 * postDetails
 * tags
 * postsByTags
 * postsByUsers
 * userTags
 */

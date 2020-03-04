import * as fromDatabase from './';

export interface PostDetails {
  id: string;
  text: string; // html string
  comments?: {
    [commentId: string]: fromDatabase.PostComment;
  };
}

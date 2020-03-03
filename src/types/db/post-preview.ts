import {PostMetadata} from './post-metadata';

export interface PostPreview extends PostMetadata {
  title: string;
  summary?: string; // simple string, the first part of the text
  tags?: {
    [tagId: string]: true;
  };
}

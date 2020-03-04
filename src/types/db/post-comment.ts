export interface PostComment extends PostMetadata {
  text: string; // simple string
  quote?: {
    authorId: string;
    text: string;
    lastModified: number; // timestamp when the original comment was created or modified
  };
}

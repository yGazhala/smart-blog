export interface PostStats {
  id: string;
  commentCount: number;
  usersLiked: {
    [userId: string]: string;
  };
}

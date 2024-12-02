export type TBlog = {
  id: number;
  image: string; // Assuming the images are strings (URLs or paths), adjust if they are imports.
  date: string;
  views: string;
  comments: string;
  authorName: string;
  authorRole: string;
  description: string;
};

export interface Blog {
  _id: string;
  title: string;
  blogPhoto: string;
  amount: number;
  userId: {
    _id: string;
    username: string;
    email: string;
    role: string;
    isDeleted: boolean;
  };
  createdAt: string;
  updatedAt: string;
}
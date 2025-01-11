import { TUser } from "./userType";


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
  content: string;
  userId: TUser;
  createdAt: string;
  updatedAt: string;
}
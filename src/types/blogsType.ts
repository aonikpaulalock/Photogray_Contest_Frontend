import { TUser } from "./userType";


export type TBlog = {
  id: number;
  image: string;
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
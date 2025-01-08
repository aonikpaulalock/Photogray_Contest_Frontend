import { TUser } from "./userType";

type Author = {
  name: string;
  location: string;
  avatar: string;
};

export type TContest = {
  id: number;
  status: string;
  amount: string;
  description: string;
  tags: string[];
  author: Author;
  buttonLabel: string;
};

export interface TPhotographyContest {
  _id: string;
  title: string;
  requirements: string;
  prize: string;
  tags: string[];
  status: string;
  paymentStatus: string;
  participantsID: string[];
  userId: TUser;
  winnerId: string | null;
  createdAt: string;
  updatedAt: string;
  deadline: string;
}

export interface TSubmission {
  _id: string;
  contestId: TPhotographyContest;
  userId: TUser;
  images: string[];
  isWinner: boolean;
  createdAt: string;
  updatedAt: string;
}
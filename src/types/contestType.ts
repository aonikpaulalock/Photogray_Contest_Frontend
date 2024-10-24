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
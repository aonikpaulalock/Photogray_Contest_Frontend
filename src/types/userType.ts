export interface TUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'contestHolder';
  status: 'active' | 'blocked';
  isDeleted: boolean;
  bio: string;
  designation: string;
  country: string;
  profileImage: string;
}
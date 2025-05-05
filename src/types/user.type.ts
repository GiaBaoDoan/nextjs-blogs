export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  address: string;
  phone: string;
  bio: string;
  status: boolean;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
  isAdmin: boolean;
}

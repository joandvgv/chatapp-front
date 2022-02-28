import { User } from "./user";

export type Post = {
  message: string;
  createdAt: string;
  updatedAt: string;
  user: User;
};

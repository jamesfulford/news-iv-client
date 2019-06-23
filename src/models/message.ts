import { ExistingUser } from "./user";

export interface Message {
  _id: string;
  createdAt: string;
  text: string;
  user: ExistingUser;
}

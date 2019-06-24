import { ExistingUser } from "./user";

export interface NewMessage {
  text: string;
}

export interface Message extends NewMessage {
  _id: string;
  createdAt: string;
  user: ExistingUser;
}

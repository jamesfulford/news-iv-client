import { ExistingUser } from "./user";

export interface NewMessage {
  text: string;
}

export interface Message extends NewMessage {
  _id: string;
  createdAt: string;
  user: {
    _id: string;
    username: string;
    profileImageUrl: string;
  };
}

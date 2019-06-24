import { Message, NewMessage } from "../../../models/message";
import MessageService from "../../../services/MessageService";
import { errorHandler, errorClearer } from "../errors";
import { AppState } from "..";

export enum MessageType {
  LOAD = "LOAD_MESSAGES",
  REMOVE = "REMOVE_MESSAGE",
  ADD = "ADD_MESSAGE",
}

// Actions
interface LoadMessagesAction {
  type: MessageType.LOAD;
  messages: Message[];
}
interface AddMessageAction {
  type: MessageType.ADD;
  message: Message;
}

// Action creators
const loadMessages = (messages: Message[]): LoadMessagesAction => ({
  type: MessageType.LOAD,
  messages
});

const addMessage = (message: Message): AddMessageAction => ({
  type: MessageType.ADD,
  message,
});

export const fetchMessages = () => {
  return (dispatch: any) => {
    MessageService.getMessages()
      .then(messages => dispatch(loadMessages(messages)))
      .then(errorClearer(dispatch))
      .catch(errorHandler(dispatch));
  };
};

export const postMessage = (message: NewMessage) => {
  return (dispatch: any, getState: () => AppState) => {
    const user = getState().currentUser.user;
    if (user) {
      MessageService.postMessage(user.id, message)
        .then(message => dispatch(addMessage(message)))
        .then(errorClearer(dispatch))
        .catch(errorHandler(dispatch));
    }
  }
}

// Aggregate
export type MessageAction = LoadMessagesAction | AddMessageAction;

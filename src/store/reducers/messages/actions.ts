import { Message, NewMessage } from "../../../models/message";
import MessageService from "../../../services/MessageService";
import { errorHandler, errorClearer } from "../errors";
import { AppState } from "..";

export enum MessageType {
  LOAD = "LOAD_MESSAGES",
  REMOVE = "REMOVE_MESSAGE",
  // ADD = "ADD_MESSAGE"
}

// Actions
interface LoadMessagesAction {
  type: MessageType.LOAD;
  messages: Message[];
}
const loadMessages = (messages: Message[]): LoadMessagesAction => ({
  type: MessageType.LOAD,
  messages
});
export const fetchMessages = () => {
  return (dispatch: any) => {
    return MessageService.getMessages()
      .then(messages => dispatch(loadMessages(messages)))
      .then(errorClearer(dispatch))
      .catch(e => {
        errorHandler(dispatch)(e);
        throw e;
      });
  };
};


// Remove Messages
interface RemoveMessageAction {
  type: MessageType.REMOVE;
  id: string;
}
const removeMessage = (message: Message): RemoveMessageAction => ({
  type: MessageType.REMOVE,
  id: message._id
});

export const deleteMessage = (message: Message) => {
  return (dispatch: any, getState: () => AppState) => {
    const user = getState().currentUser.user;
    if (user) {
      return MessageService.deleteMessage(user.id, message)
        .then(message => dispatch(removeMessage(message)))
        .then(errorClearer(dispatch))
        .catch(e => {
          errorHandler(dispatch)(e);
          throw e;
        });
    }
  };
};

// Add messages

// NOTE(james.fulford): If you dispatch an action to add the message,
// it may get added after a fetchMessages action has executed,
// potentially introducing client-side duplicate messages.
// So, don't.

// interface AddMessageAction {
//   type: MessageType.ADD;
//   message: Message;
// }

// const addMessage = (message: Message): AddMessageAction => ({
//   type: MessageType.ADD,
//   message
// });

export const postMessage = (message: NewMessage) => {
  return (dispatch: any, getState: () => AppState) => {
    const user = getState().currentUser.user;
    if (user) {
      return MessageService.postMessage(user.id, message)
        // NOTE(james.fulford): If you dispatch an action to add the message,
        // it may get added after a fetchMessages action has executed,
        // potentially introducing client-side duplicate messages.
        // So, don't.
        .then(errorClearer(dispatch))
        .catch(errorHandler(dispatch));
    }
  };
};

// Aggregate
export type MessageAction =
  | LoadMessagesAction
  | RemoveMessageAction;

import { ErrorMessage } from "../../../models/error";
import { Message } from "../../../models/message";
import MessageService from "../../../services/MessageService";
import { errorHandler, errorClearer } from "../errors";

export enum MessageType {
  LOAD = "LOAD_MESSAGES",
  REMOVE = "REMOVE_MESSAGE"
}

// Actions
interface LoadMessagesAction {
  type: MessageType.LOAD;
  messages: Message[];
}

// Action creators
const loadMessages = (messages: Message[]): LoadMessagesAction => ({
  type: MessageType.LOAD,
  messages
});

export const fetchMessages = () => {
  return (dispatch: any) => {
    MessageService.getMessages()
      .then(messages => dispatch(loadMessages(messages)))
      .then(errorClearer(dispatch))
      .catch(errorHandler(dispatch));
  };
};

// Aggregate
export type MessageAction = LoadMessagesAction;

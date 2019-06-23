import { MessageType, MessageAction } from "./actions";
import { Message } from "../../../models/message";

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

export default (
  state: MessageState = initialState,
  action: MessageAction
): MessageState => {
  switch (action.type) {
    case MessageType.LOAD:
      return { ...state, messages: action.messages };
    // case MessageType.REMOVE:
    //   return { ...state, message: undefined };
    default:
      return state;
  }
};

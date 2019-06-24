import { MessageType, MessageAction } from "./actions";
import { Message } from "../../../models/message";

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: []
};

export default (
  state: MessageState = initialState,
  action: MessageAction
): MessageState => {
  switch (action.type) {
    case MessageType.LOAD:
      return { ...state, messages: action.messages };
    case MessageType.ADD:
      return { ...state, messages: [action.message, ...state.messages] };
    case MessageType.REMOVE:
      return { ...state, messages: state.messages.filter(m => m._id !== action.id) }
    default:
      return state;
  }
};

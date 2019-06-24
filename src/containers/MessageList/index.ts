import MessageList from "./MessageList";
import { AppState } from "../../store/reducers";
import { Message } from "../../models/message";
import { fetchMessages, deleteMessage } from "../../store/reducers/messages";
import { connect } from "react-redux";

const mapStateToProps = (
  state: AppState
): {
  messages: Message[];
  currentUserId?: string;
} => ({
  messages: state.messages.messages,
  currentUserId: state.currentUser.user && state.currentUser.user.id,
});

export default connect(
  mapStateToProps,
  {
    fetchMessages,
    deleteMessage,
  }
)(MessageList);

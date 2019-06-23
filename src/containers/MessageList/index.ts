import MessageList from "./MessageList";
import { AppState } from "../../store/reducers";
import { Message } from "../../models/message";
import { fetchMessages } from "../../store/reducers/messages";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState): {
    messages: Message[];
} => ({
    messages: state.messages.messages,
});

export default connect(
  mapStateToProps,
  {
    fetchMessages
  }
)(MessageList);

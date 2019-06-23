import React, { useEffect } from "react";
import { Message } from "../../models/message";
import MessageItem from "../../components/MessageItem";

export default ({
  messages,
  fetchMessages
}: {
  messages: Message[];
  fetchMessages: Function;
}) => {
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);
  return (
    <div className="row col-sm-8">
      <div className="offset-1 col-sm-10">
        <ul className="list-group" id="messages">
          {messages.map(m => (
            <MessageItem
              key={m._id}
              date={m.createdAt}
              text={m.text}
              username={m.user.username}
              profileImageUrl={m.user.profileImageUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

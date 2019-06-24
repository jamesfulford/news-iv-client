import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default ({
  history,
  postMessage,
  errorText
}: {
  history: any;
  postMessage: Function;
  errorText?: string;
}) => {
  useAuth(history, "You must be logged in to create new messages.");
  const [text, setText] = useState("");
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          postMessage({
            text
          })
            .then(() => {
              setText("");
              history.push("/");
            });
        }}
      >
        <label htmlFor="newMessageText">Post your latest news:</label>
        <input
          type="text"
          id="newMessageText"
          name="newMessageText"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-success pull-right">Trickle News</button>
      </form>
    </>
  );
};

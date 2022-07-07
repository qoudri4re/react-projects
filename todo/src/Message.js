import React from "react";

function Message({ message }) {
  return (
    <div className="msg" id="msg">
      <p>{message}</p>
    </div>
  );
}
export default Message;

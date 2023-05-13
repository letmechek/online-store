import React, { useState } from "react";

function ChatModal({ onClose }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the input value to the chat bot API
    console.log("Sending message to chat bot:", inputValue);
    // Clear the input field
    setInputValue("");
  };

  return (
    <div
    style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.3)",
        width: "300px",
        height: "400px",
        zIndex: 9999
      }}
    >
       <div style={{ display: "flex", justifyContent: "space-between" }}>
  <h3>Support Chat</h3>
  <button onClick={onClose} style={{ border: "none", background: "none", cursor: "pointer" }}>
    <i className="fa fa-times" />
  </button>
</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatModal;




 
 
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";

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
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Avatar
          alt="avatar"
          src="https://picsum.photos/200/300"
          sx={{ width: 40, height: 40, marginRight: "10px" }}
        />
        <div>
          <p style={{ margin: 0 }}>Hello! How can I help you today?</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {/* Dialogue goes here */}
        
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex",flexDirection:'row' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{ marginRight: "10px", flex: 1,height:'33px', marginTop:'21px' }}
          placeholder="Type your message here"
        />
        <button type="submit" style={{ border: "none", background: "none", cursor: "pointer" }}>
          <SendIcon sx={{ color: "primary.main" }} />
        </button>
      </form>
    </div>
  );
}

export default ChatModal;

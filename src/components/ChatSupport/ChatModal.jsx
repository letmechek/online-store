import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import { sendMessage } from "../../utilities/support-api";

function ChatModal({ onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "support",
      text: "Hello! Welcome to Sams StreetWear. How can I help you today?",
    },
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendMessage(inputValue);
      const reply = response.data.reply;
      setMessages([
        ...messages,
        { sender: "user", text: inputValue },
        { sender: "support", text: reply },
      ]);
      setInputValue("");
      console.log(reply);
    } catch (error) {
      console.error(error);
    }
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
          alignItems: "flex-start",
          marginBottom: "20px",
          flex: 1,
        }}
      >
        <div>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              {message.sender === "support" && (
                <Avatar
                  alt="support-avatar"
                  src="support-image-url"
                  sx={{ width: 40, height: 40, marginRight: "10px" }}
                />
              )}
              <p
                style={{
                  margin: 0,
                  padding: "5px 10px",
                  borderRadius: "10px",
                  background: message.sender === "user" ? "#e5f2ff" : "#f2f2f2",
                  textAlign: "left",
                }}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{
            marginRight: "10px",
            flex: 1,
            height: "33px",
            marginTop: "21px",
          }}
          placeholder="Type your message here"
        />
        <button
          type="submit"
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <SendIcon sx={{ color: "primary.main" }} />
        </button>
      </form>
    </div>
  );
}

export default ChatModal;

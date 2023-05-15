import React, { useState } from "react";
import ChatModal from "./ChatModal";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";

function ChatSupport() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Fab
        color="white"
        aria-label="chat"
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        
        <ChatIcon />
      </Fab>
        <i className="fa fa-comment" style={{ fontSize: "24px" }} />
      
      { showModal && <ChatModal  />}
    </>
  );
}


export default ChatSupport;

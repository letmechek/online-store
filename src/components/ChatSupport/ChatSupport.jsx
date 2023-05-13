import React, { useState } from "react";
import ChatModal from "./ChatModal";

function ChatSupport() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <i className="fa fa-comment" style={{ fontSize: "24px" }} />
      </div>
      {showModal && <ChatModal onClose={() => setShowModal(false)} />}
    </>
  );
}


export default ChatSupport;

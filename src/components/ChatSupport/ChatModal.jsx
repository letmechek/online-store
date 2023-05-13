
export default function ChatModal(props) {
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
          <button onClick={props.onClose} style={{ border: "none", background: "none", cursor: "pointer" }}>
            <i className="fa fa-times" />
          </button>
        </div>
        <div>
          <p>This is the chat modal content</p>
        </div>
      </div>
    );
  }
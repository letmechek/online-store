import axios from "axios";

export async function sendMessage(message) {
  try {
    const response = await axios.post("/api/support/message", {
      message: message,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

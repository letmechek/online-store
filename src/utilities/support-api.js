import axios from "axios";

const BASE_URL = "https://sams-streetwear.herokuapp.com/api/support";
export async function sendMessage(message) {
  try {
    const response = await axios.post(`${BASE_URL}/message`, {
      message: message,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

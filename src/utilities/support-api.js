import axios from "axios";

const BASE_URL = "/v1/completions";
export async function sendMessage(message) {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      message: message,
    });
    return response;
  } catch (error) {
    throw error;
  }
}



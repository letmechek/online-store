// import axios from "axios";

// const BASE_URL = "/api/support";
// export async function sendMessage(message) {
//   try {
//     const response = await axios.post(`${BASE_URL}/message`, {
//       message: message,
//     });
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }

import { sendRequest } from './send-request';

const BASE_URL = "/api/support";

export async function sendMessage(message) {
  try {
    const response = await sendRequest(`${BASE_URL}/message`, 'POST', { message });
    return response;
  } catch (error) {
    throw error;
  }
}


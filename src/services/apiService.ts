import axios from "axios";

const API_BASE_URL = "https://<your-api-gateway-url>";

export const analyzeURL = async (url: string): Promise<any> => {
  const response = await axios.post(`${API_BASE_URL}/analyze`, { url });
  return response.data;
};

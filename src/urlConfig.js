const API_BASE_URL = "http://192.168.100.5:443"; // Replace with your API base URL
// const API_BASE_URL = "https://cute-blue-bonobo-cuff.cyclic.app/"; // Replace with your API base URL

export const api = `${API_BASE_URL}`;

export const generatePublicUrl = (fileName) => {
  return `${API_BASE_URL}/public/${fileName}`;
};

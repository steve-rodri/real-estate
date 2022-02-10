import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

const headers = {
  "x-rapidapi-host": "bayut.p.rapidapi.com",
  "x-rapidapi-key": "ad2ece6223msh5d8d8dd4b4b7a70p18e07fjsnf80ab9df97de",
};

export const fetchApi = async url => {
  const { data } = await axios.get(url, { headers });
  return data;
};

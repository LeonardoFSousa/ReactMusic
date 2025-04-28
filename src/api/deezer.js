
import axios from "axios";

export const getTopTracks = async () => {
  try {
    const response = await axios.get('https://itunes.apple.com/search?term=top&entity=song&limit=20');
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar músicas:", error);
    return [];
  }
};

export const getMusicById = async (id) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}`);
    return response.data.results[0];
  } catch (error) {
    console.error("Erro ao buscar música por ID:", error);
    return null;
  }
};

export const searchMusic = async (query) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/search?term=${query}&entity=song&limit=20`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar músicas:", error);
    return [];
  }
};

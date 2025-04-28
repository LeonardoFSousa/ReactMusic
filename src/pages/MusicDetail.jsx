import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getMusicById } from "../api/deezer";

export default function MusicDetail() {
  const { id } = useParams();
  const [music, setMusic] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    async function fetchMusic() {
      const data = await getMusicById(id);
      setMusic(data);

      if (data) {
        // Atualizar o histórico no localStorage
        const savedHistory = JSON.parse(localStorage.getItem('music-history')) || [];
        
        // Verifica se a música já existe no histórico (evitar duplicadas)
        const alreadyExists = savedHistory.find((m) => m.trackId === data.trackId);
        
        if (!alreadyExists) {
          const updatedHistory = [data, ...savedHistory].slice(0, 10); // no máximo 10 músicas
          localStorage.setItem('music-history', JSON.stringify(updatedHistory));
        }
      }
    }
    fetchMusic();
  }, [id]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // define o volume inicial em 20%
    }
  }, [music]);

  if (!music) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="music-detail">
      <h2>{music.trackName}</h2>
      <img src={music.artworkUrl100} alt={music.trackName} />
      <p><strong>Artista:</strong> {music.artistName}</p>
      <p><strong>Álbum:</strong> {music.collectionName}</p>

      <audio ref={audioRef} controls src={music.previewUrl}>
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

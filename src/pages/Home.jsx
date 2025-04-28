import { useEffect, useState } from "react";
import { searchMusic } from "../api/deezer";
import MusicCard from "../components/MusicCard";

export default function Home() {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('music-history')) || [];
    setHistory(savedHistory);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const data = await searchMusic(searchTerm);
      setSearchResults(data);
    }
  };

  return (
    <div className="container">
      {/* Formulário de Busca */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Procure uma música..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>

      {/* Resultados da busca */}
      {searchResults.length > 0 && (
        <>
          <h3>Resultados da busca:</h3>
          <div className="music-grid">
            {searchResults.map((music) => (
              <MusicCard key={music.trackId} music={music} />
            ))}
          </div>
        </>
      )}

      {/* Histórico de músicas */}
      {searchResults.length === 0 && (
        <>
          <h3>Suas últimas músicas</h3>
          {history.length === 0 ? (
            <p>Você ainda não pesquisou nenhuma música. Comece a buscar!</p>
          ) : (
            <div className="music-grid">
              {history.map((music) => (
                <MusicCard key={music.trackId} music={music} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

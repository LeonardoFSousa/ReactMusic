
import { Link } from "react-router-dom";

export default function MusicCard({ music }) {
  return (
    <div className="card">
      <img src={music.artworkUrl100} alt={music.trackName} />
      <h3>{music.trackName}</h3>
      <p>{music.artistName}</p>
      <Link to={`/musica/${music.trackId}`} className="details-button">
        Ver detalhes
      </Link>
    </div>
  );
}

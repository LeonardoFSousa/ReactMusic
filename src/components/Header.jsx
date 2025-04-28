import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/ReactMusic_Logo.png" alt="Logo ReactMusic" className="logo" />
      </div>
      <div className="nav-container">
        <Link to="/" className="home-button">Início</Link>
      </div>
    </header>
  );
}

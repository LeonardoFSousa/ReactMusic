
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MusicDetail from "./pages/MusicDetail";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musica/:id" element={<MusicDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const navigate = useNavigate();
  const [featured, setFeatured] = useState(null);

useEffect(() => {
  api.get("/animes").then(async res => {
    setAnimes(res.data);
    setFeatured(res.data[0]);

    const watched = [];

    for (let key in localStorage) {
      if (key.startsWith("progress-")) {
        const episodeId = key.replace("progress-", "");

        try {
          const resEp = await api.get(`/episodes/${episodeId}`);

          if (!watched.find(e => e._id === resEp.data._id)) {
            watched.push(resEp.data);
          }

        } catch {}
      }
    }

    setContinueWatching(watched);
  });
}, []);

  

  return (
    <div className="container">
      {continueWatching.length > 0 && (
  <>
    <h2>▶ Continuar assistindo</h2>

    <div className="row">
      {continueWatching.map(ep => {
  const progress = localStorage.getItem(`progress-${ep._id}`) || 0;

  return (
    <div
      key={ep._id}
      className="card"
      onClick={() => navigate(`/player/${ep._id}`)}
    >
      <div className="thumb-wrapper">
        <img
          src={`http://localhost:5000${ep.thumbnail || "/default.jpg"}`}
          alt=""
        />

        {/* 🔥 BARRA DE PROGRESSO */}
        <div
          className="progress-bar"
          style={{
            width: `${(progress / (ep.duration || 1000)) * 100}%`
          }}
        />
      </div>

      <p>{ep.title}</p>
    </div>
  );
})}
    </div>
  </>
)}


      <h1>🔥 AniAce</h1>

      <div className="row">
        {animes.map(anime => (
          <div
            key={anime._id}
            className="card"
            onClick={() => navigate(`/anime/${anime._id}`)}
          >
            <img
              src={`http://localhost:5000${anime.thumbnail}`}
              alt=""
            />
            <p>{anime.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
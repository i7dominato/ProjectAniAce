import { useEffect, useState } from "react";
import api from "../services/api";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get("/animes").then(res => setAnimes(res.data));
  }, []);

  return (
    <div>
      <h1>Animes</h1>

      <div style={{ display: "flex", gap: 10 }}>
        {animes.map(anime => (
          <AnimeCard key={anime._id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
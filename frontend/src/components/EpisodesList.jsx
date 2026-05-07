"use client";

import { useEffect, useState } from "react";
import api from "../services/api";

export default function EpisodesList({ animeId, onSelect }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get(`/episodes/${animeId}`).then((res) => {
      setEpisodes(res.data);
    });
  }, [animeId]);

  return (
    <div className="episodes">
      <h2>Episódios</h2>

      {episodes.map((ep) => (
        <div
          key={ep._id}
          className="episode"
          onClick={() => onSelect(ep.videoUrl)}
        >
          {ep.title}
        </div>
      ))}
    </div>
  );
}
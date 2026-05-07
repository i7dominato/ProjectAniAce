"use client";

import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function Player({ params }) {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    api.get(`/episodes/${params.id}`)
      .then(res => setEpisode(res.data[0]));
  }, []);

  if (!episode) return <p>Carregando...</p>;

  return (
    <div>
      <video
        src={episode.videoUrl}
        controls
        autoPlay
        style={{ width: "100%" }}
        onTimeUpdate={(e) => {
    const currentTime = e.target.currentTime;

    localStorage.setItem("progress", JSON.stringify({
      animeId: episode.animeId,
      time: currentTime,
      thumbnail: episode.thumbnail,
      title: episode.title
    }));
  }}
      />
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import api from "../../../services/api";
import { useRef } from "react";

const videoRef = useRef();

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("progress"));

  if (saved && saved.animeId === params.id) {
    setTimeout(() => {
      videoRef.current.currentTime = saved.time;
    }, 500);
  }
}, []);

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
        src={anime.videoUrl}
        muted
        loop
        autoPlay
        className="preview"
      />
      <video
        ref={videoRef}
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
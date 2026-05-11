"use client";

import { useEffect, useRef } from "react";
import api from "../services/api";

export default function Player({ episode, user }) {
  const videoRef = useRef(null);

  // 📥 carregar progresso do backend
  useEffect(() => {
    if (!user) return;

    api.get(`/progress/${user._id}`).then(res => {
      const found = res.data.find(p => p.episodeId === episode._id);

      if (found && videoRef.current) {
        videoRef.current.currentTime = found.time;
      }
    });
  }, [episode, user]);

  // 💾 salvar progresso
  const handleTimeUpdate = () => {
    if (!user) return;

    const video = videoRef.current;

    api.post("/progress", {
      userId: user._id,
      episodeId: episode._id,
      time: video.currentTime,
      duration: video.duration
    });
  };

  return (
    <video
      ref={videoRef}
      src={`http://localhost:5000${episode.video}`}
      controls
      autoPlay
      onTimeUpdate={handleTimeUpdate}
      style={{ width: "100%", height: "80vh" }}
    />
  );
}
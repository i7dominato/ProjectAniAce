"use client";

import { useEffect, useRef, useState } from "react";

export default function Player({ episode, onEnded }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // ▶ carregar progresso salvo
  useEffect(() => {
    const saved = localStorage.getItem(`progress-${episode._id}`);
    if (saved && videoRef.current) {
      videoRef.current.currentTime = saved;
    }
  }, [episode]);

  // 💾 salvar progresso
  const handleTimeUpdate = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    localStorage.setItem(`progress-${episode._id}`, current);

    setProgress((current / duration) * 100);
  };

  return (
    <div style={{ width: "100%", background: "black" }}>
      <video
        ref={videoRef}
        src={`http://localhost:5000${episode.video}`}
        controls
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onEnded={onEnded}
        style={{ width: "100%", height: "80vh" }}
      />

      {/* 🔥 barra estilo Netflix */}
      <div style={{
        height: "5px",
        background: "#333",
        width: "100%"
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "red"
        }} />
      </div>
    </div>
  );
}
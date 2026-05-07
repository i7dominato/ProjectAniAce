"use client";

import { useEffect, useRef } from "react";
import api from "../services/api";

export default function Player({ animeId, videoUrl, onEnd }) {
  const videoRef = useRef(null);
  let lastSave = 0;

  useEffect(() => {
    api.get(`/user/progress/${animeId}`).then((res) => {
      if (res.data?.time && videoRef.current) {
        videoRef.current.currentTime = res.data.time;
      }
    });
  }, [animeId]);

  const handleTimeUpdate = () => {
    const now = Date.now();

    if (now - lastSave > 5000) {
      lastSave = now;

      api.post("/user/progress", {
        animeId,
        time: videoRef.current.currentTime,
      });
    }
  };

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      style={{ width: "100%", maxHeight: "80vh" }}
      controls
      autoPlay
      onTimeUpdate={handleTimeUpdate}
      onEnded={onEnd} // 🔥 AQUI
    />
  );
}
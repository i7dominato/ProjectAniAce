"use client";

import { useEffect, useRef } from "react";
import api from "../services/api";

export default function Player({ animeId, videoUrl }) {
  const videoRef = useRef(null);

  // carregar progresso
  useEffect(() => {
    api.get(`/user/progress/${animeId}`).then((res) => {
      if (res.data?.time && videoRef.current) {
        videoRef.current.currentTime = res.data.time;
      }
    });
  }, [animeId]);

  // salvar progresso
  const handleTimeUpdate = () => {
    const time = videoRef.current.currentTime;

    api.post("/user/progress", {
      animeId,
      time,
    });
  };

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      controls
      autoPlay
      onTimeUpdate={handleTimeUpdate}
      className="modal-video"
    />
  );
}
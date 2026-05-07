"use client";

import { useState } from "react";
import Player from "./Player";
import EpisodesList from "./EpisodesList";
import "./modal.css";

export default function Modal({ anime, onClose }) {
  const [video, setVideo] = useState(anime?.videoUrl || "");
  if (!anime) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <Player animeId={anime._id} videoUrl={video} />

        <div className="modal-content">
          <h1>{anime.title}</h1>
          <p>{anime.description}</p>
        </div>

        <EpisodesList
          animeId={anime._id}
          onSelect={setVideo}
        />

      </div>
    </div>
  );
}
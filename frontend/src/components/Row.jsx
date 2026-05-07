"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "./row.css";
import Modal from "./Modal";

export default function Row({ title, animes }) {
  const [hovered, setHovered] = useState(null);
  const [preview, setPreview] = useState(null);
  const timeoutRef = useRef(null);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const router = useRouter();

  const handleEnter = (id) => {
    setHovered(id);

    timeoutRef.current = setTimeout(() => {
      setPreview(id);
    }, 500); // delay pra evitar travar
  };

  const handleLeave = () => {
    clearTimeout(timeoutRef.current);
    setHovered(null);
    setPreview(null);
  };

  return (
    <>
      <div className="row-container">
        <h2>{title}</h2>

        <div className="row">
          {animes.map((anime) => (
            <div
              key={anime._id}
              className={`card ${hovered === anime._id ? "active" : ""}`}
              onMouseEnter={() => handleEnter(anime._id)}
              onMouseLeave={handleLeave}
            >
              {/* Preview inteligente */}
              {preview === anime._id ? (
                <video
                  src={anime.videoUrl}
                  autoPlay
                  muted
                  loop
                  className="preview-video"
                />
              ) : (
                <img src={anime.thumbnail} />
              )}

              {/* Info expandida */}
              {hovered === anime._id && (
                <div className="card-info">
                  <h3>{anime.title}</h3>

                  <button
                    onClick={() => setSelectedAnime(anime)}
                  >
                    ▶ Assistir
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedAnime && (
        <Modal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import Player from "./Player";
import EpisodesList from "./EpisodesList";

export default function Modal({ anime, onClose }) {
  const [episodes, setEpisodes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [video, setVideo] = useState("");

  useEffect(() => {
    if (!anime) return;

    fetch(`/api/episodes/${anime._id}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
        setVideo(data[0]?.videoUrl);
      });
  }, [anime]);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < episodes.length) {
      setCurrentIndex(nextIndex);
      setVideo(episodes[nextIndex].videoUrl);
    }
  };

  if (!anime) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <Player
          animeId={anime._id}
          videoUrl={video}
          onEnd={handleNext}
        />

        <h1>{anime.title}</h1>

        <EpisodesList
          animeId={anime._id}
          onSelect={(url, index) => {
            setVideo(url);
            setCurrentIndex(index);
          }}
        />

      </div>
    </div>
  );
}
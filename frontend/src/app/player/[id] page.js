"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "../../../services/api";

export default function Player() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get(`/episodes/${id}`).then(res => {
      setEpisodes(res.data);
      setEpisode(res.data[0]);
    });
  }, [id]);

  const saveProgress = async (time) => {
    await api.post("/user/progress", {
      episodeId: episode._id,
      time
    });
  };

  return (
    <div>
      {episode && (
        <video
          src={episode.videoUrl}
          controls
          onTimeUpdate={(e) =>
            saveProgress(e.target.currentTime)
          }
        />
      )}

      <div>
        {episodes.map(ep => (
          <button key={ep._id} onClick={() => setEpisode(ep)}>
            Episódio {ep.number}
          </button>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Player from "../../components/Player";
import api from "../../services/api";

export default function PlayerPage() {
  const { id } = useParams();
  const router = useRouter();

  const [episode, setEpisode] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get(`/episodes/${id}`).then((res) => {
      setEpisode(res.data);

      // pegar lista do anime
      api.get(`/episodes/anime/${res.data.animeId}`)
        .then((ep) => setEpisodes(ep.data));
    });
  }, [id]);

  // 🔥 autoplay próximo episódio
  const handleEnded = () => {
    const currentIndex = episodes.findIndex(e => e._id === id);

    if (episodes[currentIndex + 1]) {
      router.push(`/player/${episodes[currentIndex + 1]._id}`);
    }
  };

  if (!episode) return <p>Carregando...</p>;

  return (
    <div>
      <Player episode={episode} onEnded={handleEnded} />

      {/* 🎬 lista de episódios */}
      <div style={{ padding: 20 }}>
        <h2>Episódios</h2>

        {episodes.map((ep) => (
          <div
            key={ep._id}
            onClick={() => router.push(`/player/${ep._id}`)}
            style={{ cursor: "pointer", margin: "10px 0" }}
          >
            {ep.title}
          </div>
        ))}
      </div>
    </div>
  );
}

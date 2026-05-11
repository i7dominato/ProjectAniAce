"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "../../services/api";

export default function AnimePage() {
  const { id } = useParams();
  const router = useRouter();

  const [anime, setAnime] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // 🎬 dados do anime
    api.get(`/animes/${id}`).then((res) => {
      setAnime(res.data);
    });

    // 📺 episódios
    api.get(`/episodes/anime/${id}`).then((res) => {
      setEpisodes(res.data);
    });
  }, [id]);

  if (!anime) return <p>Carregando...</p>;

  return (
    <div style={{ background: "#141414", minHeight: "100vh" }}>

      {/* 🎥 BANNER */}
      <div style={{
        height: "60vh",
        backgroundImage: `url(${anime.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
        padding: "40px"
      }}>
        <div>
          <h1 style={{ fontSize: "50px" }}>{anime.title}</h1>

          <p style={{ maxWidth: 500 }}>
            {anime.description}
          </p>

          <button
            onClick={() => router.push(`/player/${episodes[0]?._id}`)}
            style={{
              padding: "10px 20px",
              background: "white",
              color: "black",
              border: "none",
              cursor: "pointer",
              marginTop: 10
            }}
          >
            ▶ Assistir
          </button>
        </div>
      </div>

      {/* 📺 LISTA DE EPISÓDIOS */}
      <div style={{ padding: 20 }}>
        <h2>Episódios</h2>

        {episodes.map((ep, index) => (
          <div
            key={ep._id}
            onClick={() => router.push(`/player/${ep._id}`)}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
              cursor: "pointer",
              background: "#1f1f1f",
              padding: 10,
              borderRadius: 5
            }}
          >
            <img
              src={ep.thumbnail}
              style={{ width: 150, borderRadius: 5 }}
            />

            <div style={{ marginLeft: 15 }}>
              <h4>Episódio {index + 1}</h4>
              <p>{ep.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
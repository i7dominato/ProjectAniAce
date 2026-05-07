"use client";

export default function Hero({ anime }) {
  return (
    <div className="hero">
      <img src={anime.thumbnail} className="hero-bg" />

      <div className="hero-content">
        <h1>{anime.title}</h1>
        <p>{anime.description}</p>

        <button>▶ Assistir</button>
      </div>
    </div>
  );
}
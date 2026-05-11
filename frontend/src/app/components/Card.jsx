"use client";

import { useState } from "react";

export default function Card({ anime }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: 180,
        transition: "transform 0.3s",
        transform: hover ? "scale(1.2)" : "scale(1)",
        zIndex: hover ? 10 : 1
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover ? (
        <img
          src={anime.image}
          style={{ width: "100%", borderRadius: 5 }}
        />
      ) : (
        <video
          src={anime.trailer}
          autoPlay
          muted
          loop
          style={{ width: "100%", borderRadius: 5 }}
        />
      )}

      {hover && (
        <div style={{ padding: 10 }}>
          <h4>{anime.title}</h4>
        </div>
      )}
    </div>
  );
}
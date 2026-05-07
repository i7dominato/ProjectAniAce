"use client";

import { useRef } from "react";

export default function Row({ title, animes }) {
  const rowRef = useRef();

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-list" ref={rowRef}>
        {animes.map((anime) => (
          <img
            key={anime._id}
            src={anime.thumbnail}
            className="row-item"
          />
        ))}
      </div>
    </div>
  );
}
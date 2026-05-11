"use client";

import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

export default function Row({ title, animes }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {animes.map((anime) => (
          <div key={anime.id} onClick={() => setSelected(anime)}>
            <Card anime={anime} />
          </div>
        ))}
      </div>

      <Modal anime={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
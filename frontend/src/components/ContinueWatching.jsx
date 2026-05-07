"use client";

import { useEffect, useState } from "react";
import api from "../services/api";

export default function ContinueWatching({ onSelect }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/user/all-progress").then((res) => {
      setList(res.data);
    });
  }, []);

  if (!list.length) return null;

  return (
    <div className="row">
      <h2>Continuar assistindo</h2>

      <div className="row-items">
        {list.map((item) => (
          <div
            key={item.animeId}
            className="card"
            onClick={() => onSelect(item.anime)}
          >
            {item.anime && (
            <img src={item.anime.thumbnail} />
            )}
            <div className="progress-bar">
              <div
                style={{
                  width: `${(item.time / item.duration) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
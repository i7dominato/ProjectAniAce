"use client";

import { useEffect, useState } from "react";

export default function NextOverlay({ onNext }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      onNext();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="overlay">
      <h2>Próximo episódio em {count}s</h2>
      <button onClick={onNext}>Assistir agora</button>
    </div>
  );
}
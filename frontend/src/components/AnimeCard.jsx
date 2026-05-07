"use client";

import { useRouter } from "next/navigation";

export default function AnimeCard({ anime }) {
  const router = useRouter();

  return (
    <div
      className="card"
      onClick={() => router.push(`/anime/${anime._id}`)}
    >
      <img src={anime.thumbnail} />
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import api from "../services/api";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import ContinueWatching from "../components/ContinueWatching";
import Modal from "../components/Modal";

const [selected, setSelected] = useState(null);

<ContinueWatching onSelect={setSelected} />

{selected && (
  <Modal anime={selected} onClose={() => setSelected(null)} />
)}

export default function Home() {
  const [progress, setProgress] = useState(null);

useEffect(() => {
  const saved = localStorage.getItem("progress");
  if (saved) setProgress(JSON.parse(saved));
}, []);

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get("/animes").then(res => setAnimes(res.data));
  }, []);

  return (
    <>
    {progress && (
  <Row
    title="Continuar assistindo"
    animes={[{
      _id: progress.animeId,
      thumbnail: progress.thumbnail
    }]}
  />
)}
      <Navbar />

      {animes[0] && <Hero anime={animes[0]} />}

      <Row title="Populares" animes={animes} />
      <Row title="Novos" animes={animes} />
    </>
  );
}

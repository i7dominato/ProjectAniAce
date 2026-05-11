"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import api from "./services/api";

export default function Home() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get("/animes").then((res) => setAnimes(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />

{continueWatching.length > 0 && (
      <Row title="Continuar assistindo" animes={continueWatching} />
)}
      <Row title="Populares" animes={animes} />
      <Row title="Novos" animes={animes} />
    </div>
  );
  const [continueWatching, setContinueWatching] = useState([]);

useEffect(() => {
  if (!user) return;

  api.get(`/progress/${user._id}`).then(async (res) => {
    const list = [];

    for (let p of res.data) {
      const ep = await api.get(`/episodes/${p.episodeId}`);
      list.push({ ...ep.data, progress: p.time });
    }

    setContinueWatching(list);
  });
}, [user]);
}
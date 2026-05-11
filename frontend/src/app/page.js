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
  const watched = [];

  for (let key in localStorage) {
    if (key.startsWith("progress-")) {
      const id = key.replace("progress-", "");

      api.get(`/episodes/${id}`).then(res => {
        watched.push(res.data);
        setContinueWatching([...watched]);
      });
    }
  }
}, []);
}
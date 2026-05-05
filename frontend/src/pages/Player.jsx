import { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function Player() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const videoRef = useRef(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get(`/episodes/${id}`).then(res => setEpisode(res.data));
  }, [id]);

  if (!episode) return <p>Carregando...</p>;

  useEffect(() => {
  if (episode?.animeId) {
    api.get(`/episodes/${episode.animeId}`)
      .then(res => setEpisodes(res.data));
  }
}, [episode]);

  return (
    <div className="container">
      <h1>{episode.title}</h1>

      <video
  ref={videoRef}
  style={{
    width: "100%",
    maxHeight: "80vh",
    borderRadius: "10px",
    background: "#000"
  }}
  controls
  autoPlay
  src={`http://localhost:5000${episode.videoUrl}`}

  onTimeUpdate={(e) => {
    api.post("/user/progress", {
  episodeId: episode._id,
  time: e.target.currentTime
});
  }}

  onLoadedMetadata={() => {
    const saved = localStorage.getItem(`progress-${episode._id}`);
    if (saved && videoRef.current) {
      videoRef.current.currentTime = saved;
    }
  }}

  onEnded={() => {
    const currentIndex = episodes.findIndex(e => e._id === episode._id);
    const next = episodes[currentIndex + 1];

    if (next) {
      window.location.href = `/player/${next._id}`;
    }
  }}
/>
    </div>
  );
  
useEffect(() => {
  api.get(`/episodes/${episode?.animeId}`).then(res => setEpisodes(res.data));
}, [episode]);
}
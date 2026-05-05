import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Anime() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/episodes/${id}`).then(res => setEpisodes(res.data));
  }, [id]);

  return (
    <div className="container">
      <h1>📺 Episódios</h1>

      {episodes.map(ep => (
        <div
          key={ep._id}
          style={{
            background: "#222",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          onClick={() => navigate(`/player/${ep._id}`)}
        >
          <h3>{ep.title}</h3>
        </div>
      ))}
    </div>
  );
}
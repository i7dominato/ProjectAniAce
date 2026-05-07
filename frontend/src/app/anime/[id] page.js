import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (id) {
      api.get(`/episodes/${id}`).then(res => setEpisodes(res.data));
    }
  }, [id]);

  return (
    <div>
      <h1>Episódios</h1>

      {episodes.map(ep => (
        <div key={ep._id}>
          <button onClick={() => router.push(`/watch/${ep._id}`)}>
            {ep.title}
          </button>
        </div>
      ))}
    </div>
  );
}
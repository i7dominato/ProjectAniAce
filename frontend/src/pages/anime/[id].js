import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import VideoPlayer from "../../components/VideoPlayer";

export default function AnimePage() {
  const router = useRouter();
  const { id } = router.query;

  const [anime, setAnime] = useState(null);

  useEffect(() => {
    if (id) {
      api.get("/animes").then(res => {
        const found = res.data.find(m => m._id === id);
        setAnime(found);
      });
    }
  }, [id]);

  if (!anime) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <VideoPlayer src={anime.videoUrl} />
    </div>
  );
}
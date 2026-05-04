export default function AnimeCard({ anime }) {
  return (
    <div style={{ width: 200 }}>
      <img src={anime.thumbnail} style={{ width: "100%" }} />
      <p>{anime.title}</p>
    </div>
  );
}
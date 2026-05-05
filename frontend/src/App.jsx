import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{
        background: "linear-gradient(to right, #000, #111)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          🎬 AniAce
        </h2>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
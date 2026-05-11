"use client";

export default function Banner() {
  return (
    <div style={{
      height: "400px",
      backgroundImage: "url('https://via.placeholder.com/1200x400')",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "flex-end",
      padding: "20px"
    }}>
      <h1>Destaque</h1>
    </div>
  );
}
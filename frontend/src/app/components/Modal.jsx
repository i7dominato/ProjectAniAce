"use client";

export default function Modal({ anime, onClose }) {
  if (!anime) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#181818",
          padding: 20,
          width: "60%",
          borderRadius: 10
        }}
      >
        <h1>{anime.title}</h1>
        <p>{anime.description}</p>
      </div>
    </div>
  );
}
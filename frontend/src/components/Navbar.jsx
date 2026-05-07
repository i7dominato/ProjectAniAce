"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">AniAce</h1>

      <div className="links">
        <Link href="/">Início</Link>
        <Link href="/anime">Animes</Link>
      </div>
    </div>
  );
}
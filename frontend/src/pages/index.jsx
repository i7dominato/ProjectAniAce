"use client";

import { useState } from "react";
import ContinueWatching from "../components/ContinueWatching";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

<Navbar />
export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="home">
  <Navbar />

  <div className="content">
    <ContinueWatching onSelect={setSelected} />
  
      {selected && (
        <Modal
          anime={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
</div>
  );
}
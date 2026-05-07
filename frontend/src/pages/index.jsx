"use client";

import { useState } from "react";
import ContinueWatching from "../components/ContinueWatching";
import Modal from "../components/Modal";

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <ContinueWatching onSelect={setSelected} />

      {selected && (
        <Modal
          anime={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
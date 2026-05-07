"use client";

import { useContext, useState } from "react";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle = async () => {
    const res = await api.post("/auth/login", { email, password });
    login(res.data.token);
    router.push("/");
  };

  return (
    <div>
      <input onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input onChange={e => setPassword(e.target.value)} placeholder="senha" />
      <button onClick={handle}>Entrar</button>
    </div>
  );
}
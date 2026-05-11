"use client";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await api.post("/auth/login", { email, password });
    login(res.data);
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Login</h1>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="senha" type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
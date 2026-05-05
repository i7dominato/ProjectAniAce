import { useState } from "react";
import api from "../services/api";

import api from "./services/api";

const login = async () => {
  const res = await api.post("/auth/login", {
    email: "teste@email.com",
    password: "123456"
  });

  localStorage.setItem("token", res.data.token);
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    alert("Logado!");
  };

  return (
    <div>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="senha" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
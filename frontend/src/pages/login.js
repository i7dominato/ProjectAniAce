"use client";

import { useContext, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const context = useContext(AuthContext);

  // 🔥 proteção contra undefined
  if (!context) return null;

  const { login } = context;

  return (
    <div>
      <button onClick={() => login({ token: "123", user: {} })}>
        Login
      </button>
    </div>
  );
}
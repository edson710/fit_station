import { SignInButton } from "@clerk/clerk-react";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      const response = await fetch("http://localhost:5173/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);

      // Redirecionar ou salvar token no localStorage
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard"; // Redireciona para o dashboard
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/login.png')" }}
    >

      {/* Formulário de login do lado direito */}
      <div className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/login.png')" }}>
        <div className="bg-white bg-opacity-80 p-10 rounded-md shadow-md text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Bem-vindo de volta!</h1>
          <SignInButton>
            <span className="text-blue-500 hover:underline cursor-pointer">
              Entre ou crie uma conta
            </span>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

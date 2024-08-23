import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [usuarios, setUsuarios] = useState([
    { email: "user1@example.com", senha: "senha123" },
    { email: "user2@example.com", senha: "password456" },
    { email: "user3@example.com", senha: "mysecret" },
  ]);

  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [mensagemLogin, setMensagemLogin] = useState("");

  const handleEmailLoginChange = (event) => {
    setEmailLogin(event.target.value);
  };

  const handleSenhaLoginChange = (event) => {
    setSenhaLogin(event.target.value);
  };


  const login = () => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === emailLogin && usuario.senha === senhaLogin
    );
    if (usuarioEncontrado) {
      setMensagemLogin("Login bem-sucedido!");
    } else {
      setMensagemLogin("Email ou senha inválidos.");
    }
  };

  useEffect(() => {
    console.log(usuarios);
  }, [usuarios]);

  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#282c34",
          color: "white",
          fontFamily: "monospace",
          fontSize: "1.2rem",
        }}
      >
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={emailLogin}
          onChange={handleEmailLoginChange}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #444",
            borderRadius: "4px",
            backgroundColor: "#333",
            color: "white",
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senhaLogin}
          onChange={handleSenhaLoginChange}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #444",
            borderRadius: "4px",
            backgroundColor: "#333",
            color: "white",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={login}
        >
          Login
        </button>
        {mensagemLogin && (
          <p style={{ marginTop: "10px", color: "#f0ad4e" }}>{mensagemLogin}</p>
        )}
      </div>
    </main>
  );
}

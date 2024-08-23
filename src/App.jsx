import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [usuarios, setUsuarios] = useState([
    //isso é um useState ele salva um estado no seu codigo
    { email: "user1@example.com", senha: "senha123" }, // e essas sao as contas dentro de um objeto
    { email: "user2@example.com", senha: "password456" },
    { email: "user3@example.com", senha: "mysecret" },
  ]);

  const [emailLogin, setEmailLogin] = useState(""); // os estados para cada função
  const [senhaLogin, setSenhaLogin] = useState("");
  const [mensagemLogin, setMensagemLogin] = useState("");

  const handleEmailLoginChange = (event) => {
    //oque for escrito essa function vai mudar o valor
    setEmailLogin(event.target.value);
  };

  const handleSenhaLoginChange = (event) => {
    setSenhaLogin(event.target.value);
  };

  const login = () => {
    //a arrow function de login para validaçao
    const usuarioEncontrado = usuarios.find(
      //o find e para ele parar quando oque ele pede for encontrado
      (usuario) => usuario.email === emailLogin && usuario.senha === senhaLogin,
    ); // o && faz que as duas promsessas tem que ser cumprida
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
          value={emailLogin} // mostrar o valor
          onChange={handleEmailLoginChange} //mudar o valor
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

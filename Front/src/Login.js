import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  // Estilos
  const containerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh'
  };

  const formContainerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '300px', 
    padding: '20px', 
    border: '1px solid #ccc', 
    borderRadius: '5px',
    backgroundColor: 'white', // Para fundo branco
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' // Adiciona sombra para destacar o formulário
  };

  const formStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%', // Garante que o formulário use toda a largura do container
  };

  const inputStyle = {
    padding: '8px', 
    borderRadius: '4px', 
    border: '1px solid #ccc', 
    margin: '8px 0', // Adiciona espaço vertical
    width: '95%', // Os inputs preenchem o espaço horizontal disponível
  };

  const buttonStyle = {
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    backgroundColor: '#007bff', 
    color: 'white', 
    cursor: 'pointer',
    margin: '8px 0', // Adiciona espaço vertical
    width: '100%', // Faz o botão preencher o espaço horizontal disponível
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center' }}>CoguBelos</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <label>
            Usuário:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
          </label>
          <label>
            Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          </label>
          <button type="submit" style={buttonStyle}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

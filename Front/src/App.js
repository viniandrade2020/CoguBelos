import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simples verificação de login
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    /*<div className="App">
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>*/

    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

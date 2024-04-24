import React from 'react';

function Dashboard({ onLogout }) {
  const data = [
    { id: 1, image: "https://via.placeholder.com/100", temperature: "22°C", humidity: "45%", floor: "40%", co2: "800 pm" },
    { id: 2, image: "https://via.placeholder.com/100", temperature: "25°C", humidity: "40%", floor: "40%", co2: "800 pm" },
    { id: 3, image: "https://via.placeholder.com/100", temperature: "20°C", humidity: "50%", floor: "40%", co2: "800 pm" },
    { id: 4, image: "https://via.placeholder.com/100", temperature: "23°C", humidity: "47%", floor: "40%", co2: "800 pm" },
  ];

  const dashboardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    position: 'relative', // Necessário para posicionar o botão absolutamente
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyle = {
    color: '#333',
    margin: '5px 0',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    position: 'absolute',
    top: '20px', // Posiciona o botão no topo da página
    right: '20px', // Posiciona o botão no canto direito da página
    padding: '5px 10px', // Torna o botão menor
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#dc3545',
    color: 'white',
    cursor: 'pointer',
    width: 'auto' // Permite que o botão encolha para se ajustar ao texto
  };

  return (
    <div style={dashboardStyle}>
      <button onClick={onLogout} style={buttonStyle}>Sair</button>
      {data.map(sensor => (
        <div key={sensor.id} style={cardStyle}>
          <img src={sensor.image} alt="Sensor" style={{ marginBottom: '10px' }}/>
          <p style={textStyle}>Temperatura: {sensor.temperature}</p>
          <p style={textStyle}>Umidade do ar: {sensor.humidity}</p>
          <p style={textStyle}>Umidade do solo: {sensor.floor}</p>
          <p style={textStyle}>CO2: {sensor.co2}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

import React from 'react';

function Dashboard() {
  // Dados simulados para as telas
  const data = [
    { id: 1, image: "https://via.placeholder.com/100", temperature: "22°C", humidity: "45%", floor: "40%", co2: "800 pm" },
    { id: 2, image: "https://via.placeholder.com/100", temperature: "25°C", humidity: "40%", floor: "40%", co2: "800 pm" },
    { id: 3, image: "https://via.placeholder.com/100", temperature: "20°C", humidity: "50%", floor: "40%", co2: "800 pm" },
    { id: 4, image: "https://via.placeholder.com/100", temperature: "23°C", humidity: "47%", floor: "40%", co2: "800 pm" },
  ];

  // Estilos para o dashboard
  const dashboardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px', // Adiciona um pouco de espaço ao redor do grid
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: '100vh', // Garante que o grid ocupe a altura da tela se necessário
    backgroundColor: '#f7f7f7' // Cor de fundo suave para o dashboard
  };

  // Estilos para cada card do sensor
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra suave
    backgroundColor: 'white', // Fundo branco para cada card
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Estilos para o texto dos parâmetros
  const textStyle = {
    color: '#333',
    margin: '5px 0', // Espaçamento vertical para o texto
    fontWeight: 'bold' // Deixa o texto um pouco mais pesado
  };

  return (
    <div style={dashboardStyle}>
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

import React, { useState, useEffect } from 'react';

function Dashboard({ onLogout }) {
  // Inicializa sensorData como uma lista vazia
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.2.116:3000/sensor-data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Se a resposta não for um array, transforma em um array
        setSensorData(Array.isArray(data) ? data : [data]); // Coloca o objeto em um array se não for um array
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setSensorData([]); // Configura sensorData como lista vazia em caso de erro
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); // Atualiza a cada 1 segundo
    return () => clearInterval(interval);
  }, []);

  const dashboardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    position: 'relative',
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
    top: '20px',
    right: '20px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#dc3545',
    color: 'white',
    cursor: 'pointer',
    width: 'auto'
  };

  return (
    <div style={dashboardStyle}>
      <button onClick={onLogout} style={buttonStyle}>Sair</button>
      {sensorData.map(sensor => (
        <div key={sensor.id} style={cardStyle}>
          <p style={textStyle}>Umidade do solo: {sensor.floor}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

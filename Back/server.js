const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;

let sensorData = { id: 1, floor: '0%' };

app.get('/sensor-data', (req, res) => {
  res.json(sensorData);
});

app.post('/update-sensor', (req, res) => {
  console.log(req.body);
  sensorData = req.body;
  res.status(200).send('Data updated successfully');
});

app.listen(port, () => {
  console.log(`Server running on http://192.168.2.116:${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/', bodyParser.json());


var cors = require('cors')
app.use(cors())

const {
  printPalindromesBetweenTwoNumbers,
  changeBills,
  getCep,
} = require('./utils/index');
const { Car, Motocycle } = require('./vehicle');

app.get('/api/palindromo', (req, res) => {
  const { number1, number2 } = req.query;

  let palindroms = printPalindromesBetweenTwoNumbers(number1, number2);

  palindroms = palindroms.map(Number)

  res.json(palindroms);
});

app.get('/api/exchange', (req, res) => {
  const { price, payment } = req.query;

  if(price > payment) {
    res.json('O preço não pode ser maior que o pagamento')
  }

  const response = changeBills(price, payment);

  res.json(response);
});

app.get('/api/checkCeps', async (req, res) => {
  const { ceps } = req.query;

  const responseArray = [];

  for (let i = 0; ceps.length > i; i++) {
    let cep = await getCep(ceps[i]);
    responseArray.push(cep);
  }

  res.json(responseArray);
});

app.post('/api/storeVehicle', (req, res) => {
  const { vehicle } = req.body;
  let dbResponse = 'error'

  if (vehicle.type == 'car') {
    let car = new Car();

    car.model = vehicle.model;
    car.fabricationDate = vehicle.fabricationDate;
    car.doors = vehicle.doors;
    car.brand = vehicle.brand;

    dbResponse = car.storeCar();
  }

  if (vehicle.type == 'motocycle') {
    let motocycle = new Motocycle();

    motocycle.model = vehicle.model;
    motocycle.fabricationDate = vehicle.fabricationDate;
    motocycle.doors = vehicle.doors;
    motocycle.brand = vehicle.brand;

    dbResponse = motocycle.storeMotocycle()
  }

  res.json(dbResponse)
});

module.exports = app

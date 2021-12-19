const request = require('supertest');
const app = require('../index.js');

test('It should respond with an array of palindroms', async () => {
  const response = await request(app).get('/api/palindromo').query({ number1: 1, number2: 11 })
  expect(response.body).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])
});


test('It should respond with an object with the change information correctly', async () => {
  const response = await request(app).get('/api/exchange').query({ price: 366, payment: 472 })
  expect(response.body).toEqual({ bills: { hundred: 1, ten: 0, one: 6 }, price: 366, payment: 472, change: 106 })
})

test('It should respond with an object with the change information correctly', async () => {
  const response = await request(app).get('/api/checkCeps').query({ ceps: [72220044, 72220044, 72220044, 72220044, 72220044]})
  expect(response.body).toEqual(expect.anything())
})

test('It should respond with sucess in regestering an vehicle', async () => {
  const response = await request(app).post('/api/storeVehicle').send({ vehicle: {type:'car', model: 'Corolla' , fabricationDate:'14/03/2016' , doors: '2', brand: 'toyota' } })

  expect(response.body).toEqual('sucess')
})
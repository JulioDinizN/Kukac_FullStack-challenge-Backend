const fs = require('fs');

interface Vehicle {
  model: string;
  fabricationDate: string;
  doors: number;
  brand: string;
}

module.exports.Car = class Car implements Vehicle {
  model!: string;
  fabricationDate!: string;
  brand!: string;
  doors!: number;

  storeCar(): string {
    const vehicle = {
      model: this.model,
      fabricationDate: this.fabricationDate,
      brand: this.brand,
      doors: this.doors,
    };

    fs.readFile('./src/data/vehicleData.json', (err: any, data: any) => {
      if (err) throw err;

      const vehicleData = JSON.parse(data);

      vehicleData.cars.push(vehicle)

      const vehicleDataString = JSON.stringify(vehicleData)

      fs.writeFile("./src/data/vehicleData.json", vehicleDataString, (err: any) => {
        if(err) return console.log(err)
      })
    });

    return 'sucess'
  }
}

module.exports.Motocycle = class Motocycle implements Vehicle {
  model!: string;
  fabricationDate!: string;
  doors!: number;
  brand!: string;
  passagers!: number;

  storeMotocycle(): string {
    const vehicle = {
      model: this.model,
      fabricationDate: this.fabricationDate,
      brand: this.brand,
      doors: this.doors,
    };

    fs.readFile('./src/data/vehicleData.json', (err: any, data: any) => {
      if (err) throw err;

      const vehicleData = JSON.parse(data);

      vehicleData.motocycles.push(vehicle)

      const vehicleDataString = JSON.stringify(vehicleData)

      fs.writeFile("./src/data/vehicleData.json", vehicleDataString, (err: any) => {
        if(err) return console.log(err)
      })
    });

    return 'sucess'
  }
}

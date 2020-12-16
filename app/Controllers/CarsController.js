import { ProxyState } from "../AppState.js"

function _drawCars() {
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(car => {
    // NOTE Getters FAKE properties as methods
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    ProxyState.on("cars", _drawCars)
    _drawCars()
  }
}
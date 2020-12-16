import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [new Car({ make: "Benz", model: "1", year: 1985, price: 10000000, description: "Its old", imgUrl: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg" })]
  /**@type {House[]} */
  houses = [new House({bedrooms: 1, bathrooms: 1, levels: 2, imgUrl: "https://place-hold.it/200x200", year: 2020, price: 50000, description: "Freshly built Tiny Home"})]
  /**@type {Job[]} */
  jobs = [new Job({company: "Arasaka", jobTitle: "Corpo", hours: 70, rate: 100000, description: "Comes with Trauma Care Platinum benefits and cyberware upgrades", imgUrl: "https://place-hold.it/200x200"})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"

class HousesService{
  createHouse(newHouse){
    console.log("Houses Service Create Houses Function")
    let house = new House(newHouse)
    ProxyState.houses = [...ProxyState.houses, house]
  }
  deleteHouse(id){
    console.log("Houses Service Delete Houses Function")
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)

  }
}
export const housesService = new HousesService()
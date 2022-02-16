import { ProxyState } from "../AppState.js";

class CheeseService {
  mineCheese() {
    ProxyState.cheese++
    ProxyState.upgrades.forEach(u => ProxyState.cheese += (u.multiplier * u.quantity))
    console.log(ProxyState.upgrades)
  }
}

export const cheeseService = new CheeseService()
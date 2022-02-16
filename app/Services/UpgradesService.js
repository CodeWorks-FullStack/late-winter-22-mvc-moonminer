import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";

class UpgradesService {
  purchaseUpgrade(name) {
    let foundUpgrade = ProxyState.upgrades.find(u => u.name == name)
    console.log('found upgrade', foundUpgrade);
    if (foundUpgrade.price <= ProxyState.cheese) {
      ProxyState.cheese -= foundUpgrade.price
      foundUpgrade.quantity++
      foundUpgrade.price * 1.5
      Pop.toast(`${foundUpgrade.name} was purchased! nice job brah`, 'success')
      return
    }
    Pop.toast('you aint got that cheese', 'error')
  }
}

export const upgradesService = new UpgradesService()
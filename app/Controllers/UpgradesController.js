import { ProxyState } from "../AppState.js"
import { upgradesService } from '../Services/UpgradesService.js'

function _drawUpgrades() {
  let template = ''
  ProxyState.upgrades.forEach(u => template += u.Template)
  document.getElementById('upgrades').innerHTML = template
}

export class UpgradesController {
  constructor() {
    _drawUpgrades()
    ProxyState.on('cheese', _drawUpgrades)
  }

  purchaseUpgrade(name) {
    console.log('upgrade name', name)
    upgradesService.purchaseUpgrade(name)
  }
}
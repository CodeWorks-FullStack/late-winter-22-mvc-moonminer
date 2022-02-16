import { Upgrade } from "./Models/Upgrade.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  cheese = 0

  upgrades = [new Upgrade('dagger of cheese', 10, 0, 5), new Upgrade('shovel of cheese', 25, 0, 10), new Upgrade('heart of cheese', 50, 0, 15), new Upgrade('wheelbarrow of cheese', 100, 0, 25)]
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

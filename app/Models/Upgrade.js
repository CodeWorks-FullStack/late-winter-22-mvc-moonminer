import { ProxyState } from "../AppState.js"

export class Upgrade {
  constructor(name, price, quantity, multiplier) {
    this.name = name,
      this.price = price,
      this.quantity = quantity,
      this.multiplier = multiplier
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-3">
      <div class="d-flex flex-column text-center">
        <button class="btn btn-success" ${this.price > ProxyState.cheese ? 'disabled' : ''} onclick="app.upgradesController.purchaseUpgrade('${this.name}')">${this.name}</button>
        <small>$${this.price} - Multiplier: ${this.multiplier}</small>
      </div>
    </div>
    `
  }
}
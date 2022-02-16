import { ProxyState } from "../AppState.js";
import { cheeseService } from "../Services/CheeseService.js";

function _drawCheese() {
  document.getElementById('cheese-count').innerText = ProxyState.cheese.toString()
}

export class CheeseController {
  constructor() {
    // NOTE whenever the cheese value in proxystate changes, run draw
    ProxyState.on('cheese', _drawCheese)
    _drawCheese()
  }

  mineCheese() {
    cheeseService.mineCheese()
  }

}
import { gameHandler } from "../handlers/gameHandler.js";
import { printers } from "../dom/printers.js";
import { domRequest } from "../dom/domRequest.js";

async function loadGames() {
    let games = await gameHandler.loadGames();
    let gamesHTML = printers.printGames(games);
    let gamesEl = domRequest.getGamesElements();
    gamesEl.innerHTML = gamesHTML;
}

let loadButtonEl = document.querySelector(".main__form-buttons--load");

window.addEventListener("load", () => {
    loadGames();
});

loadButtonEl.addEventListener("click", () => {
   loadGames();
})
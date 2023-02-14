import { gameHandler } from "../handlers/gameHandler.js";
import { printers } from "../dom/printers.js";

let editingGameId = localStorage.getItem("gameId");
let gameContainer = document.querySelector("main");

async function loadGame(gameId) {
    let game = await gameHandler.loadGame(gameId);
    let gameHTML = printers.printEditingGame(game);
    gameContainer.innerHTML = gameHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    loadGame(editingGameId);
})

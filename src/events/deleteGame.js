import { gameHandler } from "../handlers/gameHandler.js";

function enableDeleteListener() {
    let deleteButtonElements = document.querySelectorAll(".main__container-game--icons .fa-trash");

    [...deleteButtonElements].map(button => {
        button.addEventListener("click", (event) => {
            let gameId = event.target.dataset.game;
            console.log(event.target.dataset.game);
            gameHandler.deleteGame(gameId);
        })
    })
}

setTimeout(enableDeleteListener, 500);
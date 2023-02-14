import { domRequest } from "../dom/domRequest.js";
import { gameHandler } from "../handlers/gameHandler.js";

let submitButtonEl = document.querySelector(".main__form-buttons--submit");

submitButtonEl.addEventListener("click", async () => {
    let inputValue = domRequest.getInputValue();
    console.log(inputValue);
    gameHandler.addGame(inputValue);
})

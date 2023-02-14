export const domRequest = {
    getImputValue(){
        let imputEl = document.querySelector(".main__form-input input, . main__container--editing-game--form--input").value;
        return inputEl;
    },
    getGameElements(){
        letGameEl = document.querySelector(".main__container");
        return GameEl;
    },
    getGameElement(id) {
        let getGameElements = document.querySelectorAll(".main__container-game");
        let Game = [...GameElements].filter(Game => {
            return Game.dataset.game == id;
        })
        return Game [0];
    },
    getGameNameEl (id) {
        let GamesElements = document.querySelectorAll("main__container-game");
        let game = [...gameElements].filter(game => {
            return game[0].dataset.game == id;
        })
        return game[0].querySelector(".main__container-game--name");
    }
}
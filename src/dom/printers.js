export const printers = {
    printGames(arrayGames) {
        let templateHTML = "";
        arrayGames.map(game => {
            templateHTML+= `
            <div class="main__container-game" data-game="${game.id}">
                <div class="main__container-game--name">
                    <h1>${game.name}</h1>
                </div>
                <div class="main__container-game--icons">
                <a class="main__container-game--icons--edit"><i class="fa-regular fa-pen-to-square fa-2x" data-game="${game.id}"></i></a>
                </div>
            </div>
            `
        })
        return templateHTML;
    },
    printEditingGame(game) {
        let templateHTML = `
        <div class="main_conotainer--editing-game" data-game=${game.id}>
            <h1 class="main__container--editing-game--name">Editing ${game.name} </h1>
                <div class="main__container--editing-game--form">
                <label>Introduce a new name:</label>
                <input class="main__container--editing-game--form--input" type="text" placeholder="${game.name}></input>
                <div class="main__container--editing-game--form--buttons">
                <a class="main__container-game--form--buttons--back">Back</a>
                </div>
            </div>
        </div>
         `;
        return templateHTML;
    }
}
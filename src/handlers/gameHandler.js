import { gameService } from "../services/gameService.js";

export const gameHandler = {
    addGame(newGame){
        if (!newGame) {
            return;
        }

        let game = {
            "name": newGame,
            "done": false,
            "id": "",
        }
        gameService.submitGame(game);
        return game;
    },
    loadGames(){
        return gameService.getGames();
    },
    loadGame(id) {
        return gameService.getGame(id);
    },
    deleteGame(id){
        return gameService.deleteGame(id);
    },
    updateGame(newGame){
        if (!newGame) {
            return;
        }

        let newGameModel = {
            "name": newGame.name,
            "done": false,
            "id": newGame.id
        }

        let id = newGameModel.id;

        return gameService.updateGame(id, newGameModel);
    }
}
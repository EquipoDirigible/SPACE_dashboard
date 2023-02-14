const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const gameService = {
    async getGames() {
        let response = await apiClient.get("/games");
        let allGames = response.data;
        return allGames;
    },
    async getGame(id) {
        let response = await apiClient.get("/games/" + id);
        let game = response.data;
        return game;
    },
    async submitGame(newGame){
        await apiClient.post("/games", newGame)
    },
    async deleteGame(id){
        await apiClient.delete("/games/" + id)
    },
    async updateGame(id, updatedGame){
        await apiClient.patch("/games/" + id, updatedGame)
    }
}
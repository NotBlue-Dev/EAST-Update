class Minimap {
    constructor() {
        // disc x,z
        // player x,z head, number
        this.name = 'Minimap'
        this.blue = []
        this.orange = []
    }

    handle(gameData, eventEmitter) {
        // faudra test quand meme
        if (JSON.stringify(gameData.blueTeam.playerPosition) === JSON.stringify(this.blue) && (JSON.stringify(gameData.orangeTeam.playerPosition) === JSON.stringify(this.orange))) {
            return
        }
        
        this.blue = gameData.blueTeam.playerPosition
        this.orange = gameData.orangeTeam.playerPosition

        eventEmitter.send('game.minimap', {blue: this.blue, orange: this.orange, disc:gameData.discPosition, name:this.name})
    }
}

module.exports = Minimap

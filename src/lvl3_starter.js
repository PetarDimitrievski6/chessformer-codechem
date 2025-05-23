import Game from "./Game.js";
import state from "./CURRENT_LEVEL.js";

const LEVEL_THREE_STARTING_BOARD =
    [
        [
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', 'N', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['W', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['W', 'W', 'W', 'P', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'P', 'W', 'W'],
            ['W', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W'],
            ['.', '.', '.', '.', '.', 'W', 'W', 'E', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'R', '.', 'W', 'W', 'W', 'W', '.', '.', '.', '.', 'W', '.', '.'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
        ]
    ]

function level3() {
    state.currentLevel = 3;
    let game = new Game(LEVEL_THREE_STARTING_BOARD)
    game.start();
}


export default level3;
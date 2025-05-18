import make_tiles from "./make_tiles.js";
import King from "./King.js";
import Rook from "./Rook.js";
import Knight from "./Knight.js";

function getBoardAndPieces(board) {
    const result = []
    const pieces = []
    for (let i = 0; i < board[0].length; i++) {
        result.push([])
        for (let j = 0; j < board[0][0].length; j++) {
            result[i].push(board[0][i][j])
            if (board[0][i][j] === 'K') {
                pieces.push(new King(i, j))
            }else if (board[0][i][j] === 'R') {
                pieces.push(new Rook(i, j))
            }else if (board[0][i][j] === 'N') {
                pieces.push(new Knight(i, j))
            }
        }
    }
    return [[result], pieces]
}

function removeValidMoves(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = board[i][j].replace('V', '')
            if (board[i][j] === ''){
                board[i][j] = '.'
            }
        }
    }
}

class Game{
    constructor(board){
        const r = getBoardAndPieces(board);
        this.boards = r[0]
        this.pieces = r[1]
        this.state = "PLAYING";
        this.selectedPlayer = null;
    }

    checkEnd(board){
        for (let row of board) {
            for (let cell of row) {
                if (cell.includes('E')) {
                    this.state = "PLAYING";
                    return;
                }
            }
        }
        this.state = "END";
    }

    click_tile([x, y]){
        this.boards = [this.boards[this.boards.length - 1]];
        const board = this.boards[this.boards.length - 1];
        if (this.selectedPlayer){
            if (!board[x][y].includes('V')){
                this.selectedPlayer = null;
                removeValidMoves(board)
            } else {
                removeValidMoves(board)
                this.boards = this.selectedPlayer.movePiece(x, y, board, this)
                this.selectedPlayer = null;
            }
        } else {
            for (let piece of this.pieces) {
                if (piece.x === x && piece.y === y) {
                    this.selectedPlayer = piece;
                    piece.showMoves(board);
                    break;
                }
            }
        }
        this.checkEnd(this.boards[this.boards.length - 1])
    }

    view(tile){
        this.click_tile(tile)
        make_tiles(this)
    }

    start() {
        make_tiles(this)
    }
}

export default Game;
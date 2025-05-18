import Piece from "./Piece.js";

class Rook extends Piece {
    constructor(x, y) {
        super(x, y);
    }


    moveRookUp(x, y, board){
        const valid = ['.', 'E', 'P']
        while (this.validIndexes(x - 1, y) && valid.includes(board[x - 1][y])){
            if (board[x - 1][y] === 'P'){
                x -= 1
                continue
            }
            board[x - 1][y] = board[x - 1][y] + 'V';
            board[x - 1][y] = board[x - 1][y].replace('.', '');
            x -= 1
        }
    }
    moveRookDown(x, y, board){
        const valid = ['.', 'E', 'P']
        while (this.validIndexes(x + 1, y) && valid.includes(board[x + 1][y])){
            if (board[x + 1][y] === 'P'){
                x += 1
                continue
            }
            board[x + 1][y] = board[x + 1][y] + 'V';
            board[x + 1][y] = board[x + 1][y].replace('.', '');
            x += 1
        }
    }
    moveRookLeft(x, y, board){
        const valid = ['.', 'E', 'P']
        while (this.validIndexes(x, y - 1) && valid.includes(board[x][y - 1])){
            if (board[x][y - 1] === 'P'){
                y -= 1
                continue
            }
            board[x][y - 1] = board[x][y - 1] + 'V';
            board[x][y - 1] = board[x][y - 1].replace('.', '');
            y -= 1
        }
    }
    moveRookRight(x, y, board){
        const valid = ['.', 'E', 'P']
        while (this.validIndexes(x, y + 1) && valid.includes(board[x][y + 1])){
            if(board[x][y + 1] === 'P'){
                y += 1
                continue
            }
            board[x][y + 1] = board[x][y + 1] + 'V';
            board[x][y + 1] = board[x][y + 1].replace('.', '');
            y += 1
        }
    }

    showMoves(board){
        const x = this.x;
        const y = this.y;

        // move up
        this.moveRookUp(x, y, board);


        // move down
        this.moveRookDown(x, y, board);


        // move left
        this.moveRookLeft(x, y, board);


        // move right
        this.moveRookRight(x, y, board);
    }
}

export default Rook;
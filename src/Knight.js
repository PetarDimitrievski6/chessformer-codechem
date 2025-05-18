import Piece from "./Piece.js";

class Knight extends Piece{
    constructor(x, y) {
        super(x, y);
    }


    showMoves(board){
        const x = this.x;
        const y = this.y;

        // move up right
        this.showValidTile(x - 2, y + 1, board);

        // move up left
        this.showValidTile(x - 2, y - 1, board);

        // move left up
        this.showValidTile(x - 1, y - 2, board);

        // move left down
        this.showValidTile(x + 1, y - 2, board);

        // move right up
        this.showValidTile(x - 1, y + 2, board);

        // move right down
        this.showValidTile(x + 1, y + 2, board);

        // move down left
        this.showValidTile(x + 2, y - 1, board);

        // move down right
        this.showValidTile(x + 2, y + 1, board);
    }
}

export default Knight;
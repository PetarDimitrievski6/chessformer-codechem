import Piece from "./Piece.js";

class King extends Piece{
    constructor(x, y) {
        super(x, y);
    }

    showMoves(board){
        const x = this.x;
        const y = this.y;

        // move up
        this.showValidTile(x, y - 1, board);

        // move down
        this.showValidTile(x, y + 1, board);

        // move left
        this.showValidTile(x - 1, y, board);

        // move right
        this.showValidTile(x + 1, y, board);

        // move up left
        this.showValidTile(x - 1, y - 1, board);

        // move up right
        this.showValidTile(x + 1, y - 1, board);

        // move down left
        this.showValidTile(x - 1, y + 1, board);

        // move down right
        this.showValidTile(x + 1, y + 1, board);
    }
}

export default King;
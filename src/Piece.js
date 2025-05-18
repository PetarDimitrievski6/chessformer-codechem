class Piece {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gravityDirection = "down";
    }

    validIndexes(x, y) {
        return x >= 0 && x <= 10 && y >= 0 && y <= 15;
    }

    movePiece(x, y, board) {
        const current = board[this.x][this.y];
        const isOnG = current.includes('G');
        const playerChar = current.replace('G', '');

        board[this.x][this.y] = isOnG ? 'G' : '.';

        const destination = board[x][y];
        const destinationIsG = destination.includes('G');
        board[x][y] = destinationIsG ? 'G' + playerChar : playerChar;

        this.x = x;
        this.y = y;

        let result = [];
        result.push(board.map(row => [...row]));
        result.push(...this.gravity(board, this.gravityDirection));
        return result;
    }

    gravity(board, direction) {
        if (direction === "down") return this.gravityDown(board);
        if (direction === "left") return this.gravityLeft(board);
        if (direction === "right") return this.gravityRight(board);
        if (direction === "up") return this.gravityUp(board);
        return [];
    }

    gravityDown(board) {
        let result = [];
        while (true) {
            const below = this.x + 1;
            if (!this.validIndexes(below, this.y)) break;

            const target = board[below][this.y];
            if (target === '.' || target === 'E' || target.includes('G')) {
                const current = board[this.x][this.y];
                const isOnG = current.includes('G');
                const playerChar = current.replace('G', '');

                board[this.x][this.y] = isOnG ? 'G' : '.';
                board[below][this.y] = target.includes('G') ? 'G' + playerChar : playerChar;

                this.x = below;
                result.push(board.map(row => [...row]));

                if (target.includes('G')) {
                    this.gravityDirection = "left";
                    result.push(...this.gravityLeft(board));
                    break;
                }
            } else break;
        }
        return result;
    }

    gravityUp(board) {
        let result = [];
        while (true) {
            const above = this.x - 1;
            if (!this.validIndexes(above, this.y)) break;

            const target = board[above][this.y];
            if (target === '.' || target === 'E' || target.includes('G')) {
                const current = board[this.x][this.y];
                const isOnG = current.includes('G');
                const playerChar = current.replace('G', '');

                board[this.x][this.y] = isOnG ? 'G' : '.';
                board[above][this.y] = target.includes('G') ? 'G' + playerChar : playerChar;

                this.x = above;
                result.push(board.map(row => [...row]));

                if (target.includes('G')) {
                    this.gravityDirection = "right";
                    result.push(...this.gravityRight(board));
                    break;
                }
            } else break;
        }
        return result;
    }

    gravityLeft(board) {
        let result = [];
        while (true) {
            const left = this.y - 1;
            if (!this.validIndexes(this.x, left)) break;

            const target = board[this.x][left];
            if (target === '.' || target === 'E' || target.includes('G')) {
                const current = board[this.x][this.y];
                const isOnG = current.includes('G');
                const playerChar = current.replace('G', '');

                board[this.x][this.y] = isOnG ? 'G' : '.';
                board[this.x][left] = target.includes('G') ? 'G' + playerChar : playerChar;

                this.y = left;
                result.push(board.map(row => [...row]));

                if (target.includes('G')) {
                    this.gravityDirection = "up";
                    result.push(...this.gravityUp(board));
                    break;
                }
            } else break;
        }
        return result;
    }

    gravityRight(board) {
        let result = [];
        while (true) {
            const right = this.y + 1;
            if (!this.validIndexes(this.x, right)) break;

            const target = board[this.x][right];
            if (target === '.' || target === 'E' || target.includes('G')) {
                const current = board[this.x][this.y];
                const isOnG = current.includes('G');
                const playerChar = current.replace('G', '');

                board[this.x][this.y] = isOnG ? 'G' : '.';
                board[this.x][right] = target.includes('G') ? 'G' + playerChar : playerChar;

                this.y = right;
                result.push(board.map(row => [...row]));

                if (target.includes('G')) {
                    this.gravityDirection = "down";
                    result.push(...this.gravityDown(board));
                    break;
                }
            } else break;
        }
        return result;
    }

    showValidTile(x, y, board) {
        const valid = ['.', 'E'];
        if (this.validIndexes(x, y) && valid.includes(board[x][y])) {
            board[x][y] = board[x][y] + 'V';
            board[x][y] = board[x][y].replace('.', '');
        }
    }
}

export default Piece;

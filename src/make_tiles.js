import nextLevel from "./nextLevel.js";

let flag = true;

function alternateTiles() {
    if (flag) {
        flag = false;
        return "images/LightTile.png";
    } else {
        flag = true;
        return "images/DarkTile.png";
    }
}

function make_tiles(gameInstance) {
    const boards = gameInstance.boards;
    for (let k = 0; k < boards.length; k++) {
        setTimeout(() => {
            populateTiles(boards[k], gameInstance);

            if (k === boards.length - 1) {
                setTimeout(() => checkEnd(gameInstance), 0);
            }
        }, k * 300);
    }

}

function checkEnd(gameInstance) {
    if (gameInstance.state === "END"){
        nextLevel();
    }
}

function populateTiles(board, gameInstance) {
    const tileDiv = document.getElementById('tile-container');
    tileDiv.innerHTML = '';

    for (let i = 0; i < board.length; i++) {
        flag = i % 2 === 0;

        const row = document.createElement('div');
        row.className = 'd-flex';

        for (let j = 0; j < board[0].length; j++) {
            const cell = document.createElement('span');
            cell.style.position = 'relative';
            cell.style.display = 'inline-block';
            cell.style.width = '65px';
            cell.style.height = '65px';


            const tileImg = document.createElement('img');
            tileImg.src = alternateTiles();
            tileImg.style.position = 'absolute';
            tileImg.style.zIndex = 1;
            cell.appendChild(tileImg);


            const piece = board[i][j];
            let pieceImgPath = null;

            if (piece.includes('P')) {
                pieceImgPath = 'images/Platform.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 2;
                cell.appendChild(pieceImg);
            }
            if (piece.includes('G')) {
                pieceImgPath = 'images/Gravity.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 2;
                cell.appendChild(pieceImg);
            }

            if (piece.includes('K')) {
                pieceImgPath = 'images/KingPiece.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 3;
                cell.appendChild(pieceImg);
            }else if (piece.includes('R')) {
                pieceImgPath = 'images/RookPiece.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 3;
                cell.appendChild(pieceImg);
            }else if (piece.includes('N')) {
                pieceImgPath = 'images/KnightPiece.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 3;
                cell.appendChild(pieceImg);
            }else if (piece === 'W') {
                pieceImgPath = 'images/Wall.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 2;
                cell.appendChild(pieceImg);
            }
            if (piece.includes('E')) {
                pieceImgPath = 'images/EnemyKing.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 2;
                cell.appendChild(pieceImg);
            }

            if (piece.includes('V')) {
                pieceImgPath = 'images/LegalMove.png';
                const pieceImg = document.createElement('img');
                pieceImg.src = pieceImgPath;
                pieceImg.style.position = 'absolute';
                pieceImg.style.zIndex = 2;
                cell.appendChild(pieceImg);
            }




            cell.addEventListener('click', () => {
                gameInstance.view([i, j]);
            });

            row.appendChild(cell);
        }

        tileDiv.appendChild(row);
    }
}


export default make_tiles;

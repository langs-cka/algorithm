function solution(m, n, board) {
    board = board.map(row => row.split(''));
    let clearBlockList = [];
    while(1) {
        clearBlockList = checkBoard();
    
        if (!clearBlockList.length) {
            return board.reduce((acc, cur) => acc + cur.filter(v => v === '').length, 0);
        } else {
            // console.log(clearBlockList);
            for (let i = 0, len = clearBlockList.length; i < len; i++) {
                clearBlock(clearBlockList[i]);
            }
            // console.log(board);
            for (let y = board.length - 1; y > 0; y--) {
                for (let x = board[y].length - 1; x >= 0; x--) {
                    if (board[y][x] === '') {
                        dropBlock(y, x);
                    }
                }
            }
            // console.log(board);
        }
    }
    
    function checkBoard() {
        const boardCoord = [];
        for (let y = 1, yLen = board.length; y < yLen; y++) {
            for (let x = 1, xLen = board[y].length; x < xLen; x++) {
                if (checkBlock(y, x)) {
                    boardCoord.push([y, x]);
                }
            }
        }
        return boardCoord;
    }

    function checkBlock(y, x) {
        const block = board[y][x];
        if (block === '') {
            return false;
        }
        if (block === board[y - 1][x - 1] && 
            block === board[y - 1][x] &&
            block === board[y][x - 1]) {
            return true;
        }
    }
    
    function clearBlock(coord) {
        const [y, x] = coord;
        board[y - 1][x - 1] = '';
        board[y - 1][x] = '';
        board[y][x - 1] = '';
        board[y][x] = '';
    }
    
    function dropBlock(y, x) {
        let index = y;
        while(index > 0) {
            index--;
            if (board[index][x] !== '') {
                // console.log(y, x, board[y][x], index, x, board[index][x]);
                board[y][x] = board[index][x];
                board[index][x] = '';
                break;
            }
        }
    }
}
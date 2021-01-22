class Road {
    constructor(x, y, cost, dir) {
        this.x = x;
        this.y = y;
        this.cost = cost;
        this.dir = dir;
    }
}

function solution(board) {
    let answer = Number.MAX_VALUE;
    const directions = [
        { x: -1, y: 0 },
        { x: 0, y: -1 },
        { x: 1, y: 0 }, 
        { x: 0, y: 1 }, 
    ];
    const len = board.length;
    bfs (0, 0, 0, -1);
    return answer;
    
    function bfs(x, y, cost, dir) {
        const q = [new Road(x, y, cost, dir)];
        board[0][0] = 1;
        while(q.length) {
            // console.log(q);
            const temp = q.shift();
            if (temp.x === len - 1 && temp.y === len - 1) {
                answer = Math.min(answer, temp.cost);
            }
            
            for (let i = 0; i < 4; i++) {
                const newX = temp.x + directions[i].x;
                const newY = temp.y + directions[i].y;
                if (newX >= 0 && newX < len &&
                    newY >= 0 && newY < len &&
                    board[newY][newX] !== 1) {
                    let newCost = 0;
                    if (temp.dir === -1 || temp.dir === i) {
                        newCost = temp.cost + 100;
                    } else {
                        newCost = temp.cost + 600;
                    }
                    
                    if (board[newY][newX] === 0 || board[newY][newX] >= newCost) {
                        board[newY][newX] = newCost;
                        q.push(new Road(newX, newY, newCost, i));
                    }
                }
            }
        }
    }
}
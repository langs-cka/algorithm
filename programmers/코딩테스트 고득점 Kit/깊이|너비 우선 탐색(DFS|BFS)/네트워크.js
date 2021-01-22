function solution(n, computers) {
    let answer = 0;
    let checked = Array(n).fill(false);
    
    function DFS(index) {
        checked[index] = true;
        for (let i = 0; i < n; i++) {
            if (computers[index][i] === 1 && !checked[i]) {
                DFS(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!checked[i]) {
            DFS(i);
            answer++;
        }
    }
    
    return answer;
}
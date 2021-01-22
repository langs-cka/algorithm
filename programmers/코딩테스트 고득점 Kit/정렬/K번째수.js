function solution(array, commands) {
    return commands.map(([start, end, k]) => {
        const temp = array.slice(start - 1, end).sort((a, b) => a - b);
        return temp[k - 1];
    });
}
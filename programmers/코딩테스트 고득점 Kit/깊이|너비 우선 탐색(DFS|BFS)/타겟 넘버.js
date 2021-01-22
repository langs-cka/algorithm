function solution(numbers, target) {
    return getCases(numbers).filter(v => v === target).length;
}

function getCases(numbers) {
    let resultSet = [];
    
    function dfs(result, i) {
        if (numbers.length === i) {
            resultSet.push(result);
            return;
        }
        
        dfs(result + numbers[i], i + 1);
        dfs(result - numbers[i], i + 1);
    }
    dfs(0, 0);
    
    return resultSet;
}
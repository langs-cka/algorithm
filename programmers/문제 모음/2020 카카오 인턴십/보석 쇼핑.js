function solution(gems) {
    let len = gems.length;
    let answer = [0, len - 1];
    let start = 0;
    let end = 0;
    let count = new Set(gems).size;
    let gemsMap = new Map();
    let gem = '';
    let temp = '';
    
    gemsMap.set(gems[0], 1);
    // console.log(count);
    
    while(end < len && start <= end) {
        if (gemsMap.size === count) {
            if(answer[1] - answer[0] > end - start) {
                answer = [start, end];
            }
            gem = gems[start];
            temp = gemsMap.get(gem);
            temp > 1 ? gemsMap.set(gem, --temp) : gemsMap.delete(gem);
            start++;
        } else {
            end++;
            gem = gems[end];
            temp = gemsMap.get(gem);
            temp ? gemsMap.set(gem, ++temp) : gemsMap.set(gem, 1);
        }
        // console.log(start, end, gemsMap.size);
    }
    
    return [answer[0] + 1, answer[1] + 1];
}
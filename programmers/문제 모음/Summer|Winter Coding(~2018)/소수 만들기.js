function solution(nums) {
    let answer = 0;
    let temp = 10000;
    let primeNumber = Array(temp).fill(true);
    primeNumber[0] = false;
    primeNumber[1] = false;
    
    for (let i = 2, len = Math.sqrt(temp); i <= len; i++) {
        if (!primeNumber[i])
            continue;
    
        for (let j = i + i; j <= temp; j +=i) {
            primeNumber[j] = false;
        }
    }
    
    for (let i = 0, len = nums.length; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (primeNumber[nums[i] + nums[j] + nums[k]]) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}
function solution(numbers) {
    const max = 10000001;
    const dp = Array(max).fill(true);
    dp[0] = false;
    dp[1] = false;
    for(let i = 2, len = Math.sqrt(max); i <= len; i++) {
        if (dp[i]) {
            for(let j = i + i; j <= max; j += i) {
                dp[j] = false;
            }
        }
    }
    
    return getAllNumbers(numbers).filter(v => dp[v]).length;
}

function getAllNumbers(numbers) {
    let arr = [];
    function makeNumbers(numStr, numArr) {
        let len = numArr.length;
        if (len === 0) {
            return;
        }
        for  (let i = 0; i < len; i++) {
            let target = numArr.shift();
            let newNumStr = numStr + target;
            arr.push(+newNumStr);
            makeNumbers(newNumStr, numArr);
            numArr.push(target);
        }
    }
    makeNumbers('', numbers.split(''));
    return Array.from(new Set(arr));
}
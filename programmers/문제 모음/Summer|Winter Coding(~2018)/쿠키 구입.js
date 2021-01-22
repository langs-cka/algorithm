function solution(cookie) {
    let len = cookie.length;
    let answer = [];
    let left = 0;
    let right = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    
    for (let i = 0; i < len - 1; i++) {
        leftIndex = 0;
        rightIndex = len - 1;
        left = getCookieCount(leftIndex, i);
        right = getCookieCount(i + 1, rightIndex)
        while(leftIndex !== rightIndex) {
            if (left > right) {
                left -= cookie[leftIndex];
                leftIndex++;
                // console.log(left, right, leftIndex, rightIndex);
            }
            else if (left < right) {
                right -= cookie[rightIndex];
                rightIndex--;
                // console.log(left, right, leftIndex, rightIndex);
            } else {
                answer.push(left);
                break;
            }
        }
    }
    function getCookieCount(left, right) {
        let total = 0;
        for (let i = left; i <= right; i++) {
            total += cookie[i];
        }
        return total;
    }
    // console.log(answer);
    return answer.length ? Math.max(...answer) : 0;
}
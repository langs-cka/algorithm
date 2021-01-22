function solution(nums) {
    let answer = {};
    nums.forEach(v => answer[v] = 1);
    const len = Object.keys(answer).length
    return nums.length / 2 < len ? nums.length / 2 : len;
}
function solution(n, arr1, arr2) {
    let answer = [];
    let temp = "";
    let len = 0;
    for(let ix = 0; ix < n; ix++) {
        temp = (arr1[ix] | arr2[ix]).toString(2);
        len = temp.length;
        if (len < n) {
            temp = "0".repeat(n - len) + temp;
        }
        answer.push(temp.split("").map(v => v === "1" ? "#" : " ").join(""));
    }
    return answer;
}
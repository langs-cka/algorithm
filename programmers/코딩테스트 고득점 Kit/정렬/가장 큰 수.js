function solution(numbers) {
    numbers = numbers.map(v => v + "");
    let answer = numbers.sort((a, b) => (b+a).localeCompare(a+b)).join("");
    return answer == 0 ? "0" : answer;
}
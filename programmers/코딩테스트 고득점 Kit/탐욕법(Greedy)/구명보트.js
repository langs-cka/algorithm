function solution(people, limit) {
    people.sort((a, b) => b - a);
    let answer = 0;
    let l = 0;
    let r = people.length - 1;
    
    while (l < r) {
        let sum = people[l] + people[r];
        if (sum <= limit) {
            l++;
            r--;
        } else {
            l++;
        }
        answer++;
    }
    if (l === r) {
        answer++;
    }
    
    return answer;
}
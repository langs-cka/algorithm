function solution(n,a,b)
{
    let answer = 1;
    a--;
    b--;
    
    while(1) {
        a = a / 2 | 0;
        b = b / 2 | 0;
        if (a === b) {
            return answer;
        }
        answer++;
    }
}
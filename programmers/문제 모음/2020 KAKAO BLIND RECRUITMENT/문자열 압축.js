function solution(s) {
    const answer = [];
    const center = s.length / 2 | 0 + 1; // 1개일 경우 0이여서 탐색을 하지 못한다.
    let tempStr = '';
    let count = 0;
    let check = false;
    let sliceStr = '';
    
    for (let unit = 1; unit <= center; unit++) {
        tempStr = '';
        count = 0; 
        for (let i = 0, len = s.length; i < len; i += unit) {
            check = checkStr(s, i, unit);
            if (check) {
                count++;
            } else {
                sliceStr = s.slice(i, i + unit);
                if (count) {
                    tempStr += `${count + 1}${sliceStr}`;
                    count = 0;
                } else {
                    tempStr += sliceStr;
                }
            }
        }
        answer.push(tempStr);
    }
    
    return answer.reduce((acc, cur) => acc < cur.length ? acc : cur.length, Number.MAX_VALUE);
}

function checkStr(s, index, unit) {
    for(let i = 0; i < unit; i++) {
        if (s[index + i] !== s[index + unit + i]) {
            return false;
        }
    }
    return true;
}
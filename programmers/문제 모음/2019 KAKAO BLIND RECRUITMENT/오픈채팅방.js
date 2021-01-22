function solution(record) {
    let answer = [];
    let idList = {};
    let temp = [];
    
    for (let i = 0, len = record.length; i < len; i++) {
        temp = record[i].split(' ');
        if (temp[2]) {
            idList[temp[1]] = temp[2];    
        }
    }
    
    for (let i = 0, len = record.length; i < len; i++) {
        temp = record[i].split(' ');
        if (temp[0] === 'Enter') {
            answer.push(`${idList[temp[1]]}님이 들어왔습니다.`);
        } else if (temp[0] === 'Leave') {
            answer.push(`${idList[temp[1]]}님이 나갔습니다.`);
        }
    }
    return answer;
}
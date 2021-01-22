function solution(msg) {
    let answer = [];
    let objIndex = {};
    let alphabet = '';
    let curStr = '';
    let index = 27;
    // init
    for (let i = 1; i <= 26; i++) {
        alphabet = String.fromCharCode(65 + (i - 1));
        objIndex[alphabet] = i;
    }
    
    for (let i = 0, len = msg.length; i <= len; i++) {
        if (!objIndex[curStr + msg[i]]) {
            answer.push(objIndex[curStr]);
            objIndex[curStr + msg[i]] = index++;
            curStr = '';
        }
        curStr += msg[i];
    }

    return answer;
}
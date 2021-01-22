function solution(str1, str2) {
    const answer = 65536;
    const splitStr1 = splitStr(str1);
    const splitStr2 = splitStr(str2);
    const intersection = {};
    let intersectionCount = 0;
    
    for (let i = 0, len = splitStr1.length; i < len; i++) {
        intersection[splitStr1[i]] = intersection[splitStr1[i]] ? ++intersection[splitStr1[i]] : 1;
    }
    
    for (let i = 0, len = splitStr2.length; i < len; i++) {
        if (intersection[splitStr2[i]] > 0) {
            intersectionCount++;
            intersection[splitStr2[i]]--;
        }
    }
    
    let unionCount = splitStr1.length + splitStr2.length - intersectionCount;
    
    return unionCount ? answer * intersectionCount / unionCount | 0 : answer;
}

function splitStr(str) {
    let arr = [];
    let temp = '';
    let lowerStr = str.toLowerCase();
    for (let i = 0, len = lowerStr.length; i < len; i++) {
        if (lowerStr[i] >= 'a' && lowerStr[i] <= 'z' && lowerStr[i + 1] >= 'a' && lowerStr[i + 1] <= 'z') {
            arr.push(lowerStr[i] + lowerStr[i + 1]);
        }
    }
    return arr;
}
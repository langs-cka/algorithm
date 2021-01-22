const TYPE_1 = '\(';
const TYPE_2 = '\)';

function check(str) {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === TYPE_1) {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return true;
}

function divide(str) {
    let index = 0;
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === TYPE_1) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            index = i + 1;
            break;
        }
    }
    
    return [str.slice(0, index), str.slice(index)];
}

function convert(str) {
    let newStr = '';
    for (let i = 1, len = str.length - 1; i < len; i++) {
        if (str[i] === TYPE_1) {
            newStr += TYPE_2;
        } else {
            newStr += TYPE_1;
        }
    }
    return newStr;
}

function recursion(p) {
    if (p === '') {
        return '';
    }
    const [u, v] = divide(p);
    if (check(u)) {
        return u + recursion(v);
    } else {
        let temp = `${TYPE_1}${recursion(v)}${TYPE_2}`;
        temp += convert(u);
        return temp;
    }
}

function solution(p) {
    let answer = recursion(p);
    return answer;
}
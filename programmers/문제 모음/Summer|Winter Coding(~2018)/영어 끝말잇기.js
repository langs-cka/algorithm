function solution(n, words) {
    let objWords = {};
    objWords[words[0]] = 1;
    let lastAlphabet = words[0][words[0].length - 1];
    let check = true;
    
    for (let ix = 1, len = words.length; ix < len; ix++) {
        if (objWords[words[ix]]) {
            check = false;
        }
        if (lastAlphabet !== words[ix][0]) {
            check = false;
        }
        if (!check) {
            return [ix % n + 1, Math.ceil((ix + 1) / n)];
        }
        objWords[words[ix]] = 1;
        lastAlphabet = words[ix][words[ix].length - 1];
    }

    return [0, 0];
}
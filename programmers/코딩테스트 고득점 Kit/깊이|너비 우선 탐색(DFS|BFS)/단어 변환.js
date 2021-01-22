function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let queue = [begin];
    let checked = new Set(queue);
    let level = 0;
    let nextWords = [];
    
    while(queue.length) {
        let word = queue.shift();
        if (word === target) {
            return level;
        }
        checked.add(word);
        for (let i = 0, len = word.length; i < len; i++) {
            const splicedWord = getSplicedWord(word, i);
            const temp = words.filter(v => !checked.has(v) && getSplicedWord(v, i) === splicedWord);
            nextWords.push(...temp);
        }
        if (!queue.length) {
            level++;
            queue.push(...nextWords);
            nextWords = [];
        }
    }
}

function getSplicedWord(word, i) {
    const arrWord = word.split('');
    arrWord.splice(i, 1);
    return arrWord.join('');
}
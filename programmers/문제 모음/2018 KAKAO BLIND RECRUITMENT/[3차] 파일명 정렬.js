function solution(files) {
    let answer = [];
    
    for (let i = 0, len = files.length; i < len; i++) {
        const regexr = /\d+/;
        const match = files[i].match(regexr);
        const head = (files[i].slice(0, match.index)).toLowerCase();
        const number = +match[0];
        answer.push({
            index: i,
            head,
            number,
            fileName: files[i],
        });
    }
    
    answer.sort((a, b) => {
        const sortByHead = (a.head).localeCompare(b.head);
        if (sortByHead === 0) {
            const sortByNumber = a.number - b.number;
            if (sortByNumber === 0) {
                return a.index - b.index;
            }
            return sortByNumber;
        }
        return sortByHead;
    })
    
    return answer.map(v => v.fileName);
}
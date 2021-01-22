function solution(operations) {
    let queue = [];
    for (let i = 0, len = operations.length; i < len; i++) {
        let [operation, n] = operations[i].split(' ');
        if (operation === 'I') {
            queue.push(+n);
            queue.sort((a, b) => a - b);
        } else {
            n == 1 ? queue.pop() : queue.shift();
        }
    }
    return queue.length ? [queue[queue.length - 1], queue[0]] : [0, 0];
}
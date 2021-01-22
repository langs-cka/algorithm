function solution(numbers, hand) {
    const keyIndex = {
        '1': 3, '2': 3, '3': 3,
        '4': 2, '5': 2, '6': 2,
        '7': 1, '8': 1, '9': 1,
        '*': 0, '0': 0, '#': 0,
    };
    let left = '*';
    let right = '#';
    let answer = '';
    let num = -1;
    let numIndex = -1;
    let leftGap = -1;
    let rightGap = -1;
    
    for (let i = 0, len = numbers.length; i < len; i++) {
        num = numbers[i];
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            left = num;
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            right = num;
        } else {
            numIndex = keyIndex[num];
            leftGap = Math.abs(numIndex - keyIndex[left]);
            if (left === 1 || left === 4 || left === 7 || left === '*') {
                leftGap++;
            }
            rightGap = Math.abs(numIndex - keyIndex[right]);
            if (right === 3 || right === 6 || right === 9 || right === '#') {
                rightGap++;
            }
            if (leftGap < rightGap) {
                answer += 'L';
                left = num;
            } else if (leftGap > rightGap) {
                answer += 'R';
                right = num;
            } else {
                if (hand === 'left') {
                    answer += 'L';
                    left = num;
                } else {
                    answer += 'R';
                    right = num;
                }
            }
        }
    }
    return answer;
}
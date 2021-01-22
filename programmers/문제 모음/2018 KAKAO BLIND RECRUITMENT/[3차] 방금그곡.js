function solution(m, musicinfos) {
    let answer = [];
    let info = [];
    let startTime = [];
    let endTime = [];
    let time = 0;
    let sound = [];
    for (let i = 0, len = musicinfos.length; i < len; i++) {
        info = musicinfos[i].split(',');
        startTime = info[0].split(':');
        endTime = info[1].split(':');
        time = (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1]),
        sound = scaleUpSound(time, convertSound(info[3]));
        answer.push({
            index: i,
            time, 
            answer: info[2],
            sound,
        });
    }
    m = convertSound(m);
    
    answer = answer.filter(ans => ans.sound.includes(m));
    if (answer.length) {
        answer.sort((a, b) => {
            if (a.time < b.time) {
                return 1;
            } else if (a.time > b.time) {
                return -1;
            } else {
                return a.index - b.index;
            }
        });
        // console.log(answer);
        return answer[0].answer;
    } else {
        return '(None)';
    }
}

function convertSound(str) {
    // A, B, C, D, E, F, G, A#   , C#   , D#   , F#   , G#,
    // A, B, C, D, E, F, G, A + 7, C + 7, D + 7, F + 7, G + 7
    let convertStr = '';
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i + 1] === '#') {
            convertStr += String.fromCharCode(str[i].charCodeAt(0) + 7);
            i++;
        } else {
            convertStr += str[i];
        }
    }
    
    return convertStr;
}

function splitSound(str) {
    let arr = [];
    let tempStr = '';
    
    for (let i = 0, len = str.length; i < len; i++) {
        if (tempStr && str[i] >= 'A' && str[i] <= 'G') {
            arr.push(tempStr);
            tempStr = '';
        } 
        tempStr += str[i];
    }
    if (tempStr) {
        arr.push(tempStr);
    }

    return arr;
}

function scaleUpSound(time, sound) {
    let str = '';
    let soundLen = sound.length;
    for (let i = 0; i < time; i++) {
        str += sound[i % soundLen];
    }
    
    return str;
}
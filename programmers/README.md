## 코딩테스트 고득점 Kit
* [해시](#해시)
* [스택/큐](#스택큐)
* [힙(Heap)](#힙heap)
* [정렬](#정렬)
* [완전탐색](#완전탐색)
* [탐욕법(Greedy)](#탐욕법greedy)
* [동적계획법(Dynamic Programming)](#동적계획법dynamic-programming)
* [깊이/너비 우선 탐색(DFS/BFS)](#깊이너비-우선-탐색dfsbfs)
* [이분탐색](#이분탐색)
* [그래프](#그래프)

## 해시

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42576">완주하지 못한 선수</a></summary>
        
```javascript
function solution(participant, completion) {
    let obj = {};
    completion.forEach(v => {
        obj[v] = obj[v] ? obj[v] + 1 : 1;
    });
    for (let i = 0, len = participant.length; i < len; i++) {
        if (!obj[participant[i]]) {
            return participant[i]
        }
        obj[participant[i]] = obj[participant[i]] - 1; 
    }
}

// other solution
function solution(participant, completion) {
    /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42577">전화번호 목록</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42578">위장</a></summary>
        
```javascript
function solution(clothes) {
    const objClothes = {};
    clothes.forEach(cloth => {
        const kind = cloth[1];
        objClothes[kind] = objClothes[kind] ? objClothes[kind] + 1 : 1; 
    });
    
    return Object.values(objClothes).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42579">베스트앨범</a></summary>
        
```javascript
function solution(genres, plays) {
    let playlist = {};
    
    genres.forEach((genre, i) => {
        if (playlist[genre]) {
            playlist[genre].count += plays[i];
            playlist[genre].plays.push({i, play: plays[i]});
        } else {
            playlist[genre] = {
                count: plays[i],
                plays: [{
                    i,
                    play: plays[i],
                }],
            };
        }
    });
    
    return Object.values(playlist).sort((a, b) => b.count - a.count).map(v => {
        const temp = v.plays.sort((a, b) => {
            if (a.play === b.play) {
                return a.i - b.i;
            } 
            return b.play - a.play;
        }).map(v => v.i).slice(0, 2);
        return temp;
    }).reduce((acc, cur) => [...acc, ...cur], []);
}
```
</details>


## 스택/큐

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42583">다리를 지나는 트럭</a></summary>
        
```javascript
function solution(bridge_length, weight, truck_weights) {
    let time = 1;
    let bridge = Array(bridge_length - 1).fill(0);
    let firstTruck = truck_weights.shift();
    let totalWeight = firstTruck;
    bridge.unshift(firstTruck);
    
    while(truck_weights.length) {
        totalWeight -= bridge.pop();
        const newTruck = truck_weights[0];
        if (totalWeight + newTruck <= weight) {
            totalWeight += newTruck;
            bridge.unshift(newTruck);
            truck_weights.shift();
        } else {
            bridge.unshift(0);
        }
        time++;
    }
    
    return time + bridge_length;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42584">주식가격</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42586">기능개발</a></summary>
        
```javascript
function solution(progresses, speeds) {
    let date = 0;
    let count = 0;
    let answer = [];
    let temp = 0;
    
    progresses.forEach((p, i) => {
        temp = p + speeds[i] * date;
        if (temp < 100) {
            if (count) {
                answer.push(count);
                count = 0;
            }
            date += Math.ceil((100 - temp) / speeds[i]);
        }
        count++;
    });
    
    if (count) {
        answer.push(count);
        count = 0;
    }
    
    return answer;
}

// other solution
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42587">프린터</a></summary>
        
```javascript
function solution(priorities, location) {
    priorities = priorities.map((priority, i) => ({
        i,
        priority,
    }));
    let max = getMax(priorities);
    let answer = 0;
    
    while(true) {
        if (priorities[0].priority === max) {
            if (priorities[0].i === location) {
                return answer + 1;
            } else {
                answer++;
                priorities.shift();
                max = getMax(priorities);
            }
        } else {
            priorities.push(priorities.shift());
        }   
    }
}

function getMax(priorities) {
    return Math.max(...priorities.map(v => v.priority));
}

// other solution
function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.shift();        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}
```
</details>


## 힙(Heap)

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42626">더 맵게</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42627">디스크 컨트롤러</a></summary>
        
```javascript
function solution(jobs) {
    jobs.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    let jobsLen = jobs.length;
    let time = 0;
    let answer = 0;
    
    
    while(jobs.length) {
        let target = jobs[0];
        let index = 0;
        for (let i = 1, len = jobs.length; i < len; i++) {
            if (jobs[i][0] <= time && jobs[i][1] < target[1]) {
                target = jobs[i];
                index = i;
            }
        }
        if (time < target[0]) {
            time = target[0];
        }
        time = time + target[1];
        answer += time - target[0];
        jobs.splice(index, 1);
    }
    
    return answer / jobsLen | 0;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42628">이중우선순위큐</a></summary>
        
```javascript
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
```
</details>


## 정렬

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42748">K번째수</a></summary>
        
```javascript
function solution(array, commands) {
    return commands.map(([start, end, k]) => {
        const temp = array.slice(start - 1, end).sort((a, b) => a - b);
        return temp[k - 1];
    });
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42746">가장 큰 수</a></summary>
        
```javascript
function solution(numbers) {
    numbers = numbers.map(v => v + "");
    let answer = numbers.sort((a, b) => (b+a).localeCompare(a+b)).join("");
    return answer == 0 ? "0" : answer;
}

// other solution
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42747">H-Index</a></summary>
        
```javascript
function solution(citations) {
    citations.sort((a, b) => b - a);
    let answer = 0;
    for(let i = 0, len = citations.length; i < len; i++) {
        if (citations[i] >= i + 1) {
            answer = i + 1;
        } else {
            break;
        }
    }
    
    return answer;
}
```
</details>


## 완전탐색

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42840">모의고사</a></summary>
        
```javascript
function solution(answers) {
    const supo = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let score = [0, 0, 0];
    let max = 0;
    
    answers.forEach((answer, i) => {
        supo.forEach((s, j) => {
            if (answer === s[i % s.length]) {
                score[j]++;
            }
        });
    });
    max = Math.max(...score);
    
    return score.map((v, i) => v === max ? i + 1 : 0).filter(v => v);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42839">소수 찾기</a></summary>
        
```javascript
function solution(numbers) {
    const max = 10000001;
    const dp = Array(max).fill(true);
    dp[0] = false;
    dp[1] = false;
    for(let i = 2, len = Math.sqrt(max); i <= len; i++) {
        if (dp[i]) {
            for(let j = i + i; j <= max; j += i) {
                dp[j] = false;
            }
        }
    }
    
    return getAllNumbers(numbers).filter(v => dp[v]).length;
}

function getAllNumbers(numbers) {
    let arr = [];
    function makeNumbers(numStr, numArr) {
        let len = numArr.length;
        if (len === 0) {
            return;
        }
        for  (let i = 0; i < len; i++) {
            let target = numArr.shift();
            let newNumStr = numStr + target;
            arr.push(+newNumStr);
            makeNumbers(newNumStr, numArr);
            numArr.push(target);
        }
    }
    makeNumbers('', numbers.split(''));
    return Array.from(new Set(arr));
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42842">카펫</a></summary>
        
```javascript
function solution(brown, yellow) {
    for (let i = 1, iLen = Math.sqrt(yellow);i <= iLen; i++) {
        if (yellow % i === 0) {
            const a = i + 2;
            const b = yellow / i + 2;
            if (a * b === brown + yellow) {
                return a < b ? [b , a] : [a, b];
            }
        }
    }
}
```
</details>


## 탐욕법(Greedy)

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42862">체육복</a></summary>
        
```javascript
function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    let count = 0;
    
    reserve.forEach(r => {
        if (lostSet.has(r)) {
            reserveSet.delete(r);
            lostSet.delete(r);
        }
    });
    
    lostSet.forEach(lost => {
        if (reserveSet.has(lost - 1)) {
            reserveSet.delete(lost - 1);
            lostSet.delete(lost);
        } else if (reserveSet.has(lost + 1)) {
            reserveSet.delete(lost + 1);
            lostSet.delete(lost);
        }
    });
    
    return n - lostSet.size;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42860">조이스틱</a></summary>
        
```javascript
function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42883">큰 수 만들기</a></summary>
        
```javascript
function solution(number, k) {
    let answer = [];
    let temp = 0;
    for (let i = 0, len = number.length; i < len; i++) {
        temp = number[i];
        while(k > 0 && answer[answer.length - 1] < temp) {
            answer.pop();
            k--;
        }
        answer.push(temp);
    }
    
    return answer.slice(0, answer.length - k).join('');
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42885">구명보트</a></summary>
        
```javascript
function solution(people, limit) {
    people.sort((a, b) => b - a);
    let answer = 0;
    let l = 0;
    let r = people.length - 1;
    
    while (l < r) {
        let sum = people[l] + people[r];
        if (sum <= limit) {
            l++;
            r--;
        } else {
            l++;
        }
        answer++;
    }
    if (l === r) {
        answer++;
    }
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42861">섬 연결하기</a></summary>
        
```javascript
function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    var [from, to, answer] = costs.shift();
    var connect = new Set([from, to]);
    var cost = 0;
    
    while(connect.size < n) {
        var i = costs.findIndex(c => {
            [from, to, cost] = c;
            return connect.has(from) && !connect.has(to) ||
            connect.has(to) && !connect.has(from);
        });
        
        costs.splice(i, 1);
        answer += cost;
        connect.add(from).add(to);        
    }
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42884">단속카메라</a></summary>
        
```javascript
function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let camera = -30001;
    let answer = 0;
    
    routes.forEach(route => {
        if (route[0] > camera) {
            camera = route[1];
            answer++;
        }
    });
    
    return answer;
}
```
</details>


## 동적계획법(Dynamic Programming)

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42895">N으로 표현</a></summary>
        
```javascript
function solution(N, number) {
    const max = 8;
    // const set = Array(max).fill(new Set());
    const set = Array(max).fill().map(v => new Set());
    
    for (let i = 0; i < max; i++) {
        set[i].add(+((N + '').repeat(i + 1)));
        
        for (let j = 0; j < i; j++) {
            for (const a of set[j]) {
                for (const b of set[i - j - 1]) {
                    set[i].add(a + b);
                    set[i].add(a - b);
                    set[i].add(a * b);
                    set[i].add(a / b);
                }
            }
        }
        
        if (set[i].has(number)) {
            return i + 1;
        }
    }
    return -1;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43105">정수 삼각형</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42898">등굣길</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42897">도둑질</a></summary>
        
```javascript
```
</details>


## 깊이/너비 우선 탐색(DFS/BFS)

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43165">타겟 넘버</a></summary>
        
```javascript
function solution(numbers, target) {
    return getCases(numbers).filter(v => v === target).length;
}

function getCases(numbers) {
    let resultSet = [];
    
    function dfs(result, i) {
        if (numbers.length === i) {
            resultSet.push(result);
            return;
        }
        
        dfs(result + numbers[i], i + 1);
        dfs(result - numbers[i], i + 1);
    }
    dfs(0, 0);
    
    return resultSet;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43162">네트워크</a></summary>
        
```javascript
function solution(n, computers) {
    let answer = 0;
    let checked = Array(n).fill(false);
    
    function DFS(index) {
        checked[index] = true;
        for (let i = 0; i < n; i++) {
            if (computers[index][i] === 1 && !checked[i]) {
                DFS(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!checked[i]) {
            DFS(i);
            answer++;
        }
    }
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43163">단어 변환</a></summary>
        
```javascript
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
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43164">여행경로</a></summary>
        
```javascript
function solution(tickets) {
    let routes = [];
    
    function dfs(remainTickets, airport, route) {
        if (!remainTickets.length) {
            routes.push(route);
        }
        remainTickets.forEach(([from, to], i) => {
            if (from === airport) {
                const temp = [...remainTickets];
                temp.splice(i, 1);
                dfs(temp, to, [...route, to]);
            }
        });
    }
    dfs(tickets, 'ICN', ['ICN']);
    
    return routes.sort()[0];
}
```
</details>


## 이분탐색

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43238">입국심사</a></summary>
        
```javascript
function solution(n, times) {
    times.sort((a, b) => a - b);
    let min = 1;
    let max = n * times[times.length - 1];
    let answer = max;
    
    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        let count = 0;
        
        times.forEach(time => {
            count += Math.floor(mid / time);
            if (count >= n) {
                answer = Math.min(answer, mid);
                return;
            }
        });
        
        if (count >= n) {
            max = mid - 1;
        } else if (count < n) {
            min = mid + 1;
        }
    } 
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/43236">징검다리</a></summary>
        
```javascript
function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    let left = 1;
    let right = distance;
    
    let answer=  0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let prevRock = 0;
        let removeCount = 0;
        
        rocks.forEach(rock => {
            if (rock - prevRock < mid) {
                removeCount++;
            } else {
                prevRock = rock;
            }
        });
        if (distance - prevRock < mid) {
            removeCount++;
        }
        if (removeCount <= n) {
            answer = Math.max(mid, answer);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return answer;
}
```
</details>


## 그래프

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/49189">가장 먼 노드</a></summary>
        
```javascript
function solution(n, edge) {
    let answer = 0;
    let checked = [1];
    
    while(true) {
        let newChecked = [];
        edge = edge.filter(v => {
            if (checked.includes(v[0]) && checked.includes(v[1])) {
                return false;
            }
            if (checked.includes(v[0])) {
                newChecked.push(v[1]);
                return false;
            }
            if (checked.includes(v[1])) {
                newChecked.push(v[0]);
                return false;
            }
            return true;
        });
        
        if (edge.length === 0 && newChecked.length === 0) {
            answer = checked.length
            break;
        }
        
        checked = [...new Set(newChecked)];
    }
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/49191">순위</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/49190">방의 개수</a></summary>
        
```javascript
```
</details>

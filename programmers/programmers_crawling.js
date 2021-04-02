// 코딩테스트 고득점 Kit title
const kitTitle = () => {
    const $cardTitle = document.querySelectorAll('.card-title');
    let arrStr = '';

    $cardTitle.forEach(title => {
        arrStr.push(title.textContent);
    });
};

/*
<details>
  <summary>Click to expand!</summary>
  
```python
def func():
    return 'hello, world!'
```
</details>
 */
// 각 문제 title, link
const kitProblem = () => {
    const $title = document.querySelectorAll('.title');
    const $a = document.querySelectorAll('.card-algorithm > a');

    let str = [];
    let arrTitle = [];

    $title.forEach((title, i) => {
        let link = $a[i].href;
        str += `<details>
    <summary><a href="${link}">${title.textContent}</a></summary>
        
\`\`\`javascript
\`\`\`
</details>\n\n`;
        arrTitle.push(title.textContent);
    });

    console.log(str);
    console.log(JSON.stringify(arrTitle));
}

// kit folder&file 생성
// ["해시","스택/큐","힙(Heap)","정렬","완전탐색","탐욕법(Greedy)","동적계획법(Dynamic Programming)","깊이/너비 우선 탐색(DFS/BFS)","이분탐색","그래프"]
/* 
[
    ["완주하지 못한 선수","전화번호 목록","위장","베스트앨범"], 
    ["다리를 지나는 트럭","주식가격","기능개발","프린터"],
    ["더 맵게","디스크 컨트롤러","이중우선순위큐"],
    ["K번째수","가장 큰 수","H-Index"],
    ["모의고사","소수 찾기","카펫"],
    ["체육복","조이스틱","큰 수 만들기","구명보트","섬 연결하기","단속카메라"],
    ["N으로 표현","정수 삼각형","등굣길","도둑질"],
    ["타겟 넘버","네트워크","단어 변환","여행경로"],
    ["입국심사","징검다리"],
    ["가장 먼 노드","순위","방의 개수"],
]
*/

const createKitFile = () => {
    let fs = require('fs');

    const folders = ["해시","스택/큐","힙(Heap)","정렬","완전탐색","탐욕법(Greedy)","동적계획법(Dynamic Programming)","깊이/너비 우선 탐색(DFS/BFS)","이분탐색","그래프"];
    const files = [
        ["완주하지 못한 선수","전화번호 목록","위장","베스트앨범"], 
        ["다리를 지나는 트럭","주식가격","기능개발","프린터"],
        ["더 맵게","디스크 컨트롤러","이중우선순위큐"],
        ["K번째수","가장 큰 수","H-Index"],
        ["모의고사","소수 찾기","카펫"],
        ["체육복","조이스틱","큰 수 만들기","구명보트","섬 연결하기","단속카메라"],
        ["N으로 표현","정수 삼각형","등굣길","도둑질"],
        ["타겟 넘버","네트워크","단어 변환","여행경로"],
        ["입국심사","징검다리"],
        ["가장 먼 노드","순위","방의 개수"],
    ];
    let tempFolder = 'temp';

    // temp folder 생성
    if (!fs.existsSync(tempFolder)) {
        fs.mkdirSync(tempFolder);   
    }
    
    folders.forEach((folder, i) => {
        files[i].forEach(file => {
            folder = folder.replace(/\//g, '|');
            file = file.replace(/\//g, '|');
            console.log(`${folder}/${file}.js`);
            
            if (!fs.existsSync(`${tempFolder}/${folder}`)) {
                fs.mkdirSync(`${tempFolder}/${folder}`);   
            }

            fs.appendFile(`${tempFolder}/${folder}/${file}.js`, '', err => {
                console.log(err);
            });
       });
    });
}

createKitFile();
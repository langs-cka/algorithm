/**
 BFS는 queue 형태의 자료구조를 이용해 아래와 같이 탐색을 진행한다.
 
 * 각 노드와 동일한 레벨에 존재하는 노드를 queue에 추가(push)하고
 * 제일 먼저 추가된 노드를 꺼내고 (shift)
 * 꺼낸 노드의 다음 레벨에 존재하는 노드들을 다시 queue에 추가(push) 하는 과정을 반복한다.
 */

/**
 단어 변환 문제에 BFS를 적용하면 아래와 같이 진행된다.
 
 * begin을 먼저 queue에 추가한다.
 * begin의 글자들을 순회하며 words 배열 내 begin과 한 개의 알파벳만 다른 단어들을 queue에 추가한다.
 * queue에서 제일 먼저 추가된 단어를 꺼내고, 현재 단어가 target과 일치하는지 확인한다. 
   * 1) 일치한다면, 현재의 레벨을 반환하고, 
   * 2) 일치하지 않는다면, 현재 단어와 words 배열 내 한 개의 알파벳만 
        다른 단어들(다음 레벨에 연결된 단어들이다.)을 임시 배열 temp에 추가한다.
 * queue가 비었다면 현재 레벨에 가능한 단어는 모두 탐색했다는 의미이다. 
   임시 배열 temp에 추가했던 단어들을 다시 queue에 추가함으로써 다음 레벨로 탐색을 이어간다.
 */

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    let answer = 0;
    const visited = new Set();
    let temp = [];
    const queue = [];
    
    // root 노드를 추가한다.
    queue.push(begin);
  
    while (queue.length) {
      // 현재 단어를 꺼낸다.
      const word = queue.shift();
      // 방문한 단어 리스트에 현재 단어를 추가한다.
      visited.add(word);
  
      // 현재 단어가 target과 일치한다면 현재의 레벨을 return
      if(word === target) {
        return answer;
      }
  
      // 현재 단어와 하나의 알파벳만 다른 단어들을 임시 배열에 넣어준다.
      for (let i = 0 ; i < word.length ; i++) {
        const letter = slicedWord(word, i);
        const matched = words.filter((v, j) => !visited.has(v) && slicedWord(v, i) === letter);
        temp.push(...matched);
      }
      
      // queue가 비었다는 것은 해당 레벨의 모든 단어를 확인했다는 것이므로 다음 레벨의 단어들을 queue에 넣어준다.
      if(queue.length < 1) {
        answer++;
        queue.push(...temp);
        temp = [];
      }
    }
  
    // 하나의 알파벳을 제외하고 나머지 단어가 일치하는지 확인하는 함수
    function slicedWord (word, i) {
      const wordToArray = word.split('');
      wordToArray.splice(i, 1);
      return wordToArray.join('');
    }
    return answer;
  }
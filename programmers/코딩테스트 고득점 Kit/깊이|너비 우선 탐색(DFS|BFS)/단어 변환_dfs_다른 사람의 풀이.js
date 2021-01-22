/**
 단어 변환 문제에 DFS를 적용하면 아래와 같이 진행된다.
 
 * 현재 단어와 한 알파벳만 다른 다음 레벨의 단어들을 임시 배열 temp 에 추가한다.
 * temp 배열을 순회하며 각각의 단어에서 다음 레벨의 단어들을 탐색하는 함수를 재귀적으로 실행한다. 
   배열 값 하나마다 재귀 함수가 실행되므로 배열의 한 값과 관련된 레벨을 모두 탐색한 뒤 다음 값의 탐색이 이어진다.
 * 만약 현재 값이 target과 동일하다면 현재의 레벨을 answers 배열에 추가한 뒤 재귀함수를 종료한다.
 
 begin의 글자를 모두 탐색할 때가지 위 과정을 반복한 후, answers 배열에서 가장 작은 값을 반환해주면 된다.
 */

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const answers = [];
  
    function dfs (word,level, visit) {
      for (let i = 0 ; i < word.length ; i++) {
        const letter = slicedWord(word, i);
        // 현재 단어와 하나의 알파벳만 다른 단어들을 임시 배열에 넣어준다. 이는 다음 레벨의 단어를 의미한다.
        const temp = words.filter((v) => !visit.has(v) && slicedWord(v, i) === letter);
        
        // 다음 레벨의 단어 중 target과 일치하는 단어를 포함한다면 다음 레벨의 값을 반환준다.
        if(temp.includes(target)) {
          answers.push(level+1);
          return;
        }
  
        // 다음 레벨의 단어들을 순회한다.
        temp.map(v => {
          // BFS와 다른 점은, 방문한 단어를 담아놓는 visited 배열을 각각의 노드마다 별개로 생성한다는 것이다.
          const visited = new Set([...visit]);
          visited.add(v);
          dfs(v, level+1, visited);
        })
      }
    }
    dfs(begin, 0, 0, new Set());
  
    // 하나의 알파벳을 제외하고 나머지 단어가 일치하는지 확인하는 함수
    function slicedWord (word, i) {
      const wordToArray = word.split('');
      wordToArray.splice(i, 1);
      return wordToArray.join('');
    }
    return answers.length < 1 ? 0 : Math.min(...answers);
}
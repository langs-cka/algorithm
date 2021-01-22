function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    let cacheIndex = -1;
    let city = '';
    
    for (let i = 0, len = cities.length; i < len; i++) {
        city = cities[i].toLowerCase();
        cacheIndex = cache.indexOf(city);
        if (cacheIndex >= 0) {
            answer++;
            cache.splice(cacheIndex, 1);
        } else {
            answer+=5;
        }
        cache.unshift(city);
        if (cache.length > cacheSize) {
            cache.pop();
        }
    }
    return answer;
}
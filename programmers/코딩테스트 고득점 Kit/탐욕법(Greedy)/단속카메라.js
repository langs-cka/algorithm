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
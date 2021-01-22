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
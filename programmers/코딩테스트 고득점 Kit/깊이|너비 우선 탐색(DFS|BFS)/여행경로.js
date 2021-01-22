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
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
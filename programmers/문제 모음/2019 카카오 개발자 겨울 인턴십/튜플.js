function solution(s) {
    const obj = {};
    s = (s.replace(/[{}]/g, '').split(',')).forEach(v => {
        obj[v] = obj[v] ? ++obj[v] : 1;
    });
    return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(v => +v[0]);
}
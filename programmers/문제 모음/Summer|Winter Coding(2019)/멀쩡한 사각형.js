function solution(w, h) {
    const _gcd = gcd(w, h);
    
    return (w * h) - (w / _gcd + h / _gcd - 1) * _gcd;
}

function gcd (a, b) {
    return !b ? a : gcd(b, a % b);
}
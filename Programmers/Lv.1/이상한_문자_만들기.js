function solution(s) {
    let answer = '';
    let splitStr = s.split(" ");
    answer = splitStr.map(str => {
        return str.split('').map((eachStr, index) => {
            return index % 2 === 0 ? eachStr.toUpperCase() : eachStr.toLowerCase();
        }).join('');
    }).join(' ');
    return answer;
}

function solution(s) {
  let ss = s.split(" ");
  let answer = "";

  for (let i = 0; i < ss.length; i++) {
    for (let j = 0; j < ss[i].length; j++) {
      j % 2
        ? (answer += ss[i][j].toLowerCase())
        : (answer += ss[i][j].toUpperCase());
    }
    if (i < ss.length - 1) {
      answer = answer + " ";
    }
  }
  return answer;
}

solution("try hello world");
console.log(solution("try hello world"));

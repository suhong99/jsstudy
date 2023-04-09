function star(x) {
  let answer = "";

  for (i = 1; i < x + 1; i++) {
    answer += "*".repeat(i) + "\n";
  }
  return answer;
}

console.log(star(3));

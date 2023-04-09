function solution(participant, completion) {
  answer = "";
  for (i = 0; i < completion.length; i++) {
    participant.sort();
    completion.sort();
    if (participant[i] !== completion[i]) {
      answer = participant[i];
    } else {
      answer = participant[completion.length];
    }
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);

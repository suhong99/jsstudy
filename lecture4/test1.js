function square(x) {
  answer = [];
  if (x[0][0] === x[1][0]) {
    answer.push(x[2][0]);
  } else if (x[1][0] === x[2][0]) {
    answer.push(x[0][0]);
  } else {
    answer.push(x[1][0]);
  }

  if (x[0][1] === x[1][1]) {
    answer.push(x[2][1]);
  } else if (x[1][1] === x[2][1]) {
    answer.push(x[0][1]);
  } else {
    answer.push(x[1][1]);
  }

  return answer;
}




console.log(
  square([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
);


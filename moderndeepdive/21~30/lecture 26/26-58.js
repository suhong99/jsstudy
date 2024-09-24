function sum(x, y) {
  // 인수가 전달되지 않아 매개변수의 값이 undefined 인 경우 기본값을 할당함
  x = x || 0;
  y = y || 0;
  return x + y;
}

function sum2(x = 0, y = 0) {
  return x + y;
}

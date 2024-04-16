function sum() {
  let res = 0;
  //arguments는 length가 있는 유사 배열 객체이므로 for문으로 순회 가능
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

console.log(sum()); //0
console.log(sum(1, 2)); //3

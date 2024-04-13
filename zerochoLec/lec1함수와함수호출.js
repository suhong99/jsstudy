const add = (a, b) => console.log(a + b);

function calculator(func, a, b) {
  func(a, b);
}

calculator(add, 3, 5);

//tip : 호출 부분에 return문의 값을 넣음

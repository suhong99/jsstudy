const obj = {
  // 심벌 값으로 프러퍼티 키를 생성
  [Symbol.for("mySymbol")]: 1,
};

console.log(obj[Symbol.for("mySymbol")]);

//1

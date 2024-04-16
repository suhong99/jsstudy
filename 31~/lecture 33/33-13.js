const obj = {
  [Symbol("mySymbol")]: 1,
};

console.log(Object.getOwnPropertyNames(obj)); //[]
console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(mySymbol) ]

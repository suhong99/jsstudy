// Number.prototype.toExponential
console.log((77.1234).toExponential()); //7.71234e+1

console.log((77.1234).toExponential(2)); //7.71e+1
// 소수점이 있을 경우는 사용가능하지만 권장 X
console.log((77.1234).toExponential()); //7.71234e+1

// console.log(77.toExponential())//SyntaxError: Invalid or unexpected token

console.log(Math.abs(-1)); //1
console.log(Math.abs("-1")); //1
console.log(Math.abs(null)); //0
console.log(Math.abs([])); //0
console.log(Math.abs("")); //0

// NaN인 값들
console.log(Math.abs());
console.log(Math.abs(undefined));
console.log(Math.abs({}));
console.log(Math.abs("string"));

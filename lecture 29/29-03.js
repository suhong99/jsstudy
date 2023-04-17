console.log(Math.round(-1)); //1
console.log(Math.round("-1")); //1
console.log(Math.round(null)); //0
console.log(Math.round([])); //0
console.log(Math.round("")); //0
console.log(Math.round(-1.6)); //-2
console.log(Math.round(1.6)); //2

// NaN인 값들
console.log(Math.round()); //NaN

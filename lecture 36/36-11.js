//ES5
var user5 = { firstName5: "dd", lastName5: "lee" };
var firstName5 = user5.firstName5;
var lastName5 = user5.lastName5;
console.log(firstName5, lastName5); //dd lee

//ES6

const user6 = { firstName6: "ES6", lastName6: "Lee" };
const { lastName6, firstName6 } = user6;
console.log(firstName6, lastName6); //ES6 Lee

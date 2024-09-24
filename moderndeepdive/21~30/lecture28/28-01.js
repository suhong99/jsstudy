const numObj = new Number();
console.log(numObj); // [Number: 0]

const numObj2 = new Number(10);
console.log(numObj2); //[Number: 10]

const numObjString = new Number("10");
console.log(numObjString); //[Number: 10]

const numObjNaN = new Number("NAN");
console.log(numObjNaN); //[Number: NaN]

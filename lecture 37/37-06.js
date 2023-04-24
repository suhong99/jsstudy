const set = new Set();
console.log(set); //  Set(0) {}

set.add(1);
console.log(set); //Set(1) { 1 }

set.add(1).add(2).add(2);
console.log(set); //Set(2) { 1, 2 }

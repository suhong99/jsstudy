const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");
console.log(s1 === s2); //true

console.log(Symbol.keyFor(s1)); //mySymbol

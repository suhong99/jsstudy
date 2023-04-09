const person = {
  //데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  //fullName은 접근자 함수로 구성된 프로퍼티임
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

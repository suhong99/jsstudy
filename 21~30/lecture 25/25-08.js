class Person {}
//인스턴스 생성
const me = new Person();
console.log(me); //Person {}

class Person2 {}
//인스턴스 생성
const me2 = Person2();
console.log(me2); //Person {} //TypeError: Class constructor Person2 cannot be invoked without 'new'

const Person3 = class MyClass {};
//함수 표현식과 마찬가지로 클래스를 가리키는 식별자로  인스턴스를 생성해야 함
const me3 = new Person3();

//클래스 이름 MyClass 는 함수와 동일하게 몸체 내부에서만 유효한 식별자
console.log(MyClass); //ReferenceError: MyClass is not defined

const you = new MyClass(); // Reference error

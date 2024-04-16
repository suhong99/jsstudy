//수퍼 클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

//서브 클래스
class Derived extends Base {
  sayHi() {
    //super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived("Led");

console.log(derived.sayHi()); //Hi! Led. how are you doing?

//피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
  //Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    //Symbol.iteartor 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
    //next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        //이터레이터 리절트 객체를 바노한한다
        return { value: cur, done: cur >= max };
      },
    };
  },
};

// 이터러블인 fibonacci 객체를 순회할 떄 마다 next 메서드가 호출된다
for (const num of fibonacci) {
  console.log(num);
}
// 1
// 2
// 3
// 5
// 8
//스프레드 문법 및 배열 디스트럭처링 할당의 대상이 되는 이터러블
const arr = [...fibonacci];
console.log(arr); //[ 1, 2, 3, 5, 8 ]

const [first, second, ...rest] = fibonacci;
console.log(first, second, rest); //1 2 [ 3, 5, 8 ]

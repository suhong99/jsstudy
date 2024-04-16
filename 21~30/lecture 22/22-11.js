var value = 1;
const obj = {
  value: 100,
  foo() {
    //this 바인딩을 변수 that에 할당
    const that = this;
    //콜백 함수 내부에서 this대신 that을 참조
    setTimeout(function () {
      console.log(that.value); //100
    }, 100);
  },
};

obj.foo();

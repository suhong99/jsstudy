const foo = () => {
  throw Error('foo에서 발생한 에러'); // 4
};

const bar = () => {
  foo();
};

const bar2 = () => {
  try {
    foo();
  } catch (err) {
    console.log('bar2에러');
  }
};

const baz = () => {
  bar();
};

const baz2 = () => {
  bar2();
};

try {
  baz2(); // 전파된 에러잡음
} catch (err) {
  console.log(err);
}

try {
  baz(); // 못잡아서 Error : foo에서 발생한 에러가 뜸
} catch (err) {
  console.log(err);
}

//forEach 메서드는 콜백함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달함
[1, 2, 3].forEach((item, index, arr) => {
  console.log(
    `요소값을: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`
  );
});

// 요소값을: 1, 인덱스: 0, this: [1,2,3]
// 요소값을: 2, 인덱스: 1, this: [1,2,3]
// 요소값을: 3, 인덱스: 2, this: [1,2,3]

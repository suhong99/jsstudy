//유사 배열 객체를 변환하여 배열을 생성함
Array.from({ length: 2, 0: "a", 1: "b" }); // ['a','b']

//이터러블을 반환하여 배열을 생성 (문자도 이터러블)
Array.from("Hey"); // ['H','e','y']



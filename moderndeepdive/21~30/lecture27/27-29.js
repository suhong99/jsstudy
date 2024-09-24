//Array.from 에 length만 존재하는 유사 배열 객체를 전달하면 unefined 요소로 채움
Array.from({ length: 3 }); // [undefined,undefined,undefined]

//Array.form에 두 번쨰 인수로 전달ㄹ한 콜백 함수의 반환값으로 구성된 배열을 반환함
Array.from({ length: 3 }, (_, i) => i); //[0,1,2]

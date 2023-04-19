const target = "Is this all there is?";

//임의의 3자리 묹열을 대소문자 구별하여 전역  검색한다
const regExp = /.../g;

console.log(target.match(regExp));
//[
//     'Is ', 'thi',
//     's a', 'll ',
//     'the', 're ',
//     'is?'
//   ]

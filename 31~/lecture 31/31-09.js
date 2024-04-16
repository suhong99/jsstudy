const target = "Is this all there is?";

// target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색함
console.log(target.match(/is/)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

//target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색함
console.log(target.match(/is/i)); //[ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

// target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색함
console.log(target.match(/is/g)); //[ 'is', 'is' ]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색함
console.log(target.match(/is/gi)); //[ 'Is', 'is', 'is' ]

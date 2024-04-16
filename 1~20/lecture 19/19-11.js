//함수 객체는 rptotype 프로퍼티를 소유한다.

(function () {}.hasOwnProrperty("prototype")); //true

//일반 객체는 prototype 프로퍼티를 소유하지 않는다
// ({}).hasOwnProperty("prototype"); //false

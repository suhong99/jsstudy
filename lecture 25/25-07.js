const Person = "1";

{
  //호이스팅이 발생하지 않으면 '1'이 출력됨
  console.log(Person); //ReferenceeError
  //클래스 선언문
  class Person {}
}

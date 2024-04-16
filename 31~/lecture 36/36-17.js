const str = "Hello";
//String 래퍼 객체로부터 length 프로퍼티만 추출한다
const { length } = str;
console.log(length); //5

const todo = { id: 1, content: "HTML", completed: true };

const { id } = todo;
console.log(id); //1

function printTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? "완료" : "비완료"} 상태입니다.`);
}

printTodo(todo); //할일 HTML은 완료 상태입니다.

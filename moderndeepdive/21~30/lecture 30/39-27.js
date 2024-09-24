const today = new Date("2070/7/24/12:30");
console.log(today.toString()); //Thu Jul 24 2070 12:30:00 GMT+0900 (대한민국 표준시)

console.log(today.toDateString()); //Thu Jul 24 2070

console.log(today.toTimeString()); //12:30:00 GMT+0900 (대한민국 표준시)

console.log(today.toISOString()); //2070-07-24T03:30:00.000Z

console.log(today.toLocaleString()); //2070. 7. 24. 오후 12:30:00

console.log(today.toLocaleString("ko-KR")); //2070. 7. 24. 오후 12:30:00
console.log(today.toLocaleString("en-US")); //7/24/2070, 12:30:00 PM

console.log(today.toLocaleTimeString("ko-KR")); //오후 12:30:00

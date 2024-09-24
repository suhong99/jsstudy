//new Date()
console.log(new Date()); //2023-04-17T04:16:09.519Z

console.log(Date()); //Mon Apr 17 2023 13:16:09 GMT+0900 (대한민국 표준시)

//new Date(milliseconds)
console.log(new Date(0)); //1970-01-01T00:00:00.000Z

//1일
console.log(new Date(86400000)); //1970-01-02T00:00:00.000Z

//new Date(dateString)
console.log(new Date("May 26, 2020")); //2020-05-25T15:00:00.000Z

//new Date(year,month[,~~])

console.log(new Date("2020/3/26/10:00:00:00")); //2020-03-26T01:00:00.000Z
console.log(new Date(2020, 2)); //2020-02-29T15:00:00.000Z

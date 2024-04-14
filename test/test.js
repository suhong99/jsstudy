setTimeout(console.log(this), 1000);
setTimeout(function () {
  console.log(this);
}, 2000);

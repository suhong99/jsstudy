// 단톡에서 사람들이 안좋다고 한 코드
const clickEvents = {
  search: (key) => {
    console.log(`Search ${key}`);
  },
  reset: () => {
    console.log(reset);
  },
};

clickEvents.search('test');

clickEvents.search = () => {
  console.log('mutable');
};

clickEvents.search('test');

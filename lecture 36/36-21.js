const user = {
  name: "Lee",
  address: {
    zipCode: "03068",
    city: "Seoul",
  },
};

const {
  address: { city },
} = user;
// console.log(address); //ReferenceError: address is not defined

console.log(city); //Seoul

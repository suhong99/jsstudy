const strObj = new String("Lee");

console.log(Object.getOwnPropertyDescriptors(strObj));

// {
//     '0': {
//       value: 'L',
//       writable: false,
//       enumerable: true,
//       configurable: false
//     },
//     '1': {
//       value: 'e',
//       writable: false,
//       enumerable: true,
//       configurable: false
//     },
//     '2': {
//       value: 'e',
//       writable: false,
//       enumerable: true,
//       configurable: false
//     },
//     length: { value: 3, writable: false, enumerable: false, configurable: false }
//   }

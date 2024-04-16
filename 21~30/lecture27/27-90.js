const points = [40, 2, 100, 1, 20, 11];
console.log(points.sort()); //[ 1, 100, 11, 2, 20, 40 ]

const points2 = [40, 2, 100, 1, 20, 11];
console.log(points2.sort((a, b) => a - b)); //[ 1, 2, 11, 20, 40, 100 ]

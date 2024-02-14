const sumArray = (arr) => {
  if (arr == null) return 0;
  return arr
    .sort((x, y) => x - y)
    .slice(1, -1)
    .reduce((acc, cur) => cur + acc, 0);
};
console.log(sumArray([6, 2, 1, 8, 10]));

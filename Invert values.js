const invert = (arr) => {
  if (arr == null) return arr;
  else return arr.map((x) => -x);
};

// test case
console.log(invert([-1, -5, 5, 9, 4, -9, -8, 0]));

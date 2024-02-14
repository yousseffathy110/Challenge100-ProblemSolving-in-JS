const sumPositive = (x) => {
  sum = 0;
  x.forEach((element) => {
    if (element > 0) {
      sum += element;
    }
  });
  return sum;
};

console.log(sumPositive([0, 0, 0, 0, 0, 0]));

const digitize = (num) => {
  return String(num).split("").map(Number).reverse();
};
console.log(digitize(35231));

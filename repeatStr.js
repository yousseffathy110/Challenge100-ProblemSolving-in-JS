const repeatStr = (times, value) => {
  let x = "";
  for (let i = 0; i < times; i++) {
    x += value;
  }
  return x;
};

// // another way

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

console.log(repeatStr(5, "yousef"));

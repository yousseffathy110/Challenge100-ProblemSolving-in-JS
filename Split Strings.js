// const solution = (word) => {
//   const arr = [];
//   let str = "";
//   for (let i = 0; i < word.length; i++) {
//     str += word[i];
//     if (str.length === 2) {
//       arr.push(str);
//       str = "";
//     }
//   }
//   if (str.length === 1) {
//     str += "_";
//     arr.push(str);
//   }
//   return arr;
// };

// second solition
const solution = (str) => {
  let i = 0;
  let result = [];

  if (str.length % 2 !== 0) {
    str = str + "_";
  }

  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }

  return result;
};

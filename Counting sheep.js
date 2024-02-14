// const countSheeps = (sheep) => {
//   let sum = 0;
//   if (sheep == null) {
//     return 0;
//   } else {
//     sheep.forEach((element) => {
//       if (element == true) {
//         sum++;
//       }
//     });
//   }
//   return sum;
// };

// // second solution
const countSheeps = (sheep) => {
  if (sheep == null) {
    return 0;
  } else {
    return sheep.reduce((sum, element) => {
      return sum + (element === true ? 1 : 0);
    }, 0);
  }
};

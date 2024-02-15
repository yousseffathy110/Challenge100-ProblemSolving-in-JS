const countPositivesSumNegatives = (x) => {
  let negative = 0,
    positive = 0,
    count = [];
  if (!x || x.length === 0) return [];
  x.forEach((element) => {
    if (element > 0) positive++;
    else if (element < 0) negative += element;
  });
  return [positive, negative];
};

// // secong solution
// const countPositivesSumNegatives = (input) => {
//   return input && input.length
//     ? [
//         input.filter((x) => x > 0).length,
//         input.reduce((t, c) => (c < 0 ? t + c : t), 0),
//       ]
//     : [];
// };

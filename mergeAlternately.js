// const mergeAlternately = (wordOne, wordTwo) => {
//   let word1 = wordOne.split("");
//   let word2 = wordTwo.split("");
//   let mergedArr = [];
//   if (word1.length == word2.length) {
//     for (let i = 0; i < word1.length; i++) {
//       mergedArr.push(word1[i]);
//       for (let j = i; j < i + 1; j++) {
//         mergedArr.push(word2[j]);
//       }
//     }
//   } else {
//     for (let i = 0; i < word1.length; i++) {
//       mergedArr.push(word1[i]);
//       for (let j = i; j < i + 1; j++) {
//         mergedArr.push(word2[j]);
//       }
//       if (i == word1.length - 1) {
//         for (let q = word1.length; q < word2.length; q++) {
//           mergedArr.push(word2[q]);
//         }
//       }
//     }
//   }
//   return mergedArr.join("");
// };


// another solution 
const mergeAlternately = (wordOne, wordTwo) => {
  const word1 = wordOne.split("");
  const word2 = wordTwo.split("");
  const mergedArr = [];
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      mergedArr.push(word1[i]);
    }
    if (i < word2.length) {
      mergedArr.push(word2[i]);
    }
  }
  return mergedArr.join("");
};

const arrayStringsAreEqual = (word1, word2) => {
  let str1 = "",
    str2 = "";
  word1.forEach((element) => {
    str1 += element;
  });
  word2.forEach((element) => {
    str2 += element;
  });
  return str1 == str2 ? true : false;
};

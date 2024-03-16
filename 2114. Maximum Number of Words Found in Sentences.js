const mostWordsFound = (sentences) => {
  let count = 0;
  sentences.forEach((element) => {
    if (element.split(" ").length > count) count = element.split(" ").length;
  });
  return count;
};

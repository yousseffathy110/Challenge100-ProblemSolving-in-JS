const truncateSentence = (s, k) => {
  let words = s.split(" "),
    str = [];
  for (let i = 0; i < k; i++) {
    str.push(words[i]);
  }
  return str.join(" ");
};

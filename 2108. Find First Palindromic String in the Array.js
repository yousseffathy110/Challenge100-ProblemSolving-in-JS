//first solution
const firstPalindrome = (words) => {
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(words[i].length / 2); j++) {
      if (words[i][j] == words[i][words[i].length - 1 - j]) count++;
    }
    if (count === Math.floor(words[i].length / 2)) return words[i];
  }
  return "";
};

//second solution using builtin methods
const firstPalindrome = (words) => {
  for (let i = 0; i < words.length; i++)
    if (words[i] === words[i].split("").reverse().join("")) return words[i];
  return "";
};

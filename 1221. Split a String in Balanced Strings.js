//o(n^2)
const balancedStringSplit = (s) => {
  let count = 0,
    str = "",
    size = s.length;
  for (let i = 0; i < size; i++) {
    str += s[i];
    if (str.length % 2 == 0) {
      let r = 0,
        l = 0;
      for (let j = 0; j < str.length; j++) str[j] == "R" ? r++ : l++;
      if (r == l) {
        count++;
        str = "";
      }
    }
  }
  return count;
};

// second solution
//o(n)
const balancedStringSplit = (s) => {
  let count = 0,
    balance = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? balance++ : balance--;
    if (balance === 0) count++;
  }
  return count;
};

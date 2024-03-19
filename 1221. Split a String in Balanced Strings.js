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
      for (let j = 0; j < str.length; j++) {
        str[j] == "R" ? r++ : l++;
      }
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
  let count = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance++;
    } else {
      balance--;
    }

    if (balance === 0) {
      count++;
    }
  }

  return count;
};

//first solution using two pass approach "Not efficient"! O(n^2)
const lengthOfLastWord = (s) => {
  let count = 0,
    size = s.length;
  while (true) {
    if (s[size - 1] == " ") size--;
    else break;
  }
  for (let i = 0; i < size; i++) {
    if (s[i] == " ") count = 0;
    else count++;
  }
  return count;
};

// second solution O(n)
//optimal solution
const lengthOfLastWord = (s) => {
  let count = 0,
    size = s.length;
  for (let i = size - 1; i >= 0; i--) {
    if (s[i] == " ") {
      if (count == 0) continue;
      else break;
    } else count++;
  }
  return count;
};

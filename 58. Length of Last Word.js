//first solution using two pass approach "Not efficient"!
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


// second solution 
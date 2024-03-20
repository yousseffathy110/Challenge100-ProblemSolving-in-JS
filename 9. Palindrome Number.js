//first solution
const isPalindrome = (x) => {
  let number = String(x);
  return number.split("").reverse().join("") === number ? true : false;
};

//second solution
const isPalindrome = (x) => {
  for (let i = 0; i < Math.floor(String(x).length * 0.5); i++)
    if (String(x)[i] !== String(x)[String(x).length - 1 - i]) return false;
  return true;
};

//my dirst solution
const firstMissingPositive = (nums) => {
  let mySet = new Set(),
    i = 1,
    positiveNums = nums
      .filter((x) => {
        return x > 0;
      })
      .sort((a, b) => a - b)
      .forEach((element) => {
        mySet.add(element);
      });
  while (i > 0) {
    if (!mySet.has(i)) return i;
    i++;
  }
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]));

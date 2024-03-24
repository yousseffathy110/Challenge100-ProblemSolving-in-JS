const findDuplicate = (nums) => {
  const myset = new Set();
  let duplicated = undefined;
  nums.forEach((element) => {
    if (myset.has(element)) {
      duplicated = element;
      return;
    }
    myset.add(element);
  });
  return duplicated;
};


//second solution!!
const findDuplicate = (nums) => {
  const mySet = new Set();
  for (const num of nums) {
    if (mySet.has(num)) return num;
    mySet.add(num);
  }
};

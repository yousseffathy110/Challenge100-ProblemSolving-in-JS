const twoSum = (nums, target) => {
  let arr = [];
  nums.forEach((element, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (element + nums[i] === target) {
        arr.push(index, i);
      }
    }
  });
  return arr;
};

console.log(twoSum([2, 7, 11, 15], 9));

// time comlexity of O(n^2)
const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};

// time comlexity of O(n)
// using hashset
const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }

  return false;
};

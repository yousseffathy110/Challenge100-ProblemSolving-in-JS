const findMaxLength = (nums) => {
  nums = nums.map((num) => (num === 0 ? -1 : num));
  let maxLen = 0,
    sum = 0,
    sumIndices = new Map();
  sumIndices.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sumIndices.has(sum)) maxLen = Math.max(maxLen, i - sumIndices.get(sum));
    else sumIndices.set(sum, i);
  }
  return maxLen;
};

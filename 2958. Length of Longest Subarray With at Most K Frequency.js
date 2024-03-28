const maxSubarrayLength = (nums, k) => {
  let ans = 0;
  const count = new Map();
  for (let l = 0, r = 0; r < nums.length; ++r) {
    count.set(nums[r], (count.get(nums[r]) || 0) + 1);
    while ((count.get(nums[r]) || 0) === k + 1)
      count.set(nums[l++], (count.get(nums[l]) || 0) - 1);
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};

const maxSubarrayLength = (nums, k) => {
  let freq = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right];
    freq.set(num, (freq.get(num) || 0) + 1);

    while (freq.size > k) {
      const leftNum = nums[left];
      freq.set(leftNum, freq.get(leftNum) - 1);
      if (freq.get(leftNum) === 0) {
        freq.delete(leftNum);
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

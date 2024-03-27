const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;
  let ans = 0,
    prod = 1;
  for (let l = 0, r = 0; r < nums.length; ++r) {
    prod *= nums[r];
    while (prod >= k) prod /= nums[l++];
    ans += r - l + 1;
  }
  return ans;
};

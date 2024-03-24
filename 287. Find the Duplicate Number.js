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

const findDuplicates = (nums) => {
  let arr = [];
  const base = new Set();
  nums.forEach((element) => {
    if (base.has(element)) arr.push(element);
    base.add(element);
  });
  return arr;
};

// second solution
const findDuplicates = (nums) => {
  const seen = new Set(),
    duplicates = new Set();
    
  for (const num of nums) {
    if (seen.has(num)) duplicates.add(num);
    else seen.add(num);
  }
  return Array.from(duplicates);
};

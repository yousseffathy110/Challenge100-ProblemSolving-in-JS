// using sets
const numJewelsInStones = (jewels, stones) => {
  let count = 0,
    mySet = new Set();
  for (let i = 0; i < jewels.length; i++) mySet.add(jewels[i]);
  for (let j = 0; j < stones.length; j++) if (mySet.has(stones[j])) count++;
  return count;
};

// using hashmap
const numJewelsInStones = (jewels, stones) => {
  const jewelMap = {};
  let count = 0;
  for (const jewel of jewels) jewelMap[jewel] = true;
  for (const stone of stones) if (jewelMap[stone]) count++;
  return count;
};

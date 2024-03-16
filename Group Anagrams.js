const groupAnagrams = (str) => {
  let sortedArr = [],
    concatArr = [];
  const setstr = new Set();
  str.forEach((element) => {
    sortedArr.push(element.split("").sort().join(""));
  });
  for (let i = 0; i < str.length; i++) {
    concatArr.push(sortedArr[i]);
    for (let j = 1; j < str.length; j++) {
      if (sortedArr[i] === sortedArr[j]) {
        setstr.add(sortedArr[j]);
      }
    }
  }
  return concatArr;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

const groupAnagrams = (str) => {
  const strObjects = str.map((element) => {
    return {
      original: element,
      sorted: element.split("").sort().join(""),
    };
  });
  const groupedAnagrams = {};
  strObjects.forEach((obj) => {
    const key = obj.sorted;
    if (!groupedAnagrams[key]) {
      groupedAnagrams[key] = [];
    }
    groupedAnagrams[key].push(obj.original);
  });
  const result = Object.values(groupedAnagrams);
  return result;
};

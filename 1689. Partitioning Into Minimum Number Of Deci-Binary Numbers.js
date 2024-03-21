//solutio one
const minPartitions = (n) => {
  let max = 0,
    arr = n.split("");
  for (let i = 0; i < arr.length; i++) {
    let digit = parseInt(arr[i]);
    if (max < digit) max = digit;
  }
  return max;
};
// solution 2
const minPartitions = (n) => {
  Math.max(...n.split("").map(Number));
};

console.log(minPartitions("27346209830709182346"));

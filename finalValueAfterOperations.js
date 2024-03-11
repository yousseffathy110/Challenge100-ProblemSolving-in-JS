const finalValueAfterOperations = (operations) => {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] == "+" || operations[i][2] == "+") {
      x += 1;
    } else {
      x -= 1;
    }
  }
  return x;
};

const points = (games) => {
  let counter = 0;
  let size = games.length;
  for (let i = 0; i < size; i++) {
    let flag = games[i].split("");
    if (flag[0] > flag[2]) counter += 3;
    else if (flag[0] == flag[2]) counter += 1;
    else counter += 0;
  }
  return counter;
};

console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);

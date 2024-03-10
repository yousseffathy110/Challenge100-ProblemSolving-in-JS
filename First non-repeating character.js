const firstNonRepeatingLetter = (input) => {
  let copy = input.toLowerCase();
  for (let i = 0; i < input.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (i === j) continue;
      if (copy[i] === copy[j]) count++;
    }
    if (count === 0) return input[i];
  }
  return "";
};

console.log(firstNonRepeatingLetter("stress"));

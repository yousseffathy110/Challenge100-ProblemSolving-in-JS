const isAnagram = (s, t) => {
  let arrone = s.split("").sort().join("");
  let arrtwo = t.split("").sort().join("");
  if (arrone == arrtwo) return true;
  else return false;
};

const restoreString = (s, indices) => {
  let str = "";
  for (let i = 0; i < indices.length; i++) {
    str += s[indices[i]];
  }
  return str;
}
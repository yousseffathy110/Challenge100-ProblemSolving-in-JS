const restoreString = (s, indices) => {
  let str = string(s),
  for (let i = 0; i < indices.length; i++) {
    str[indices[i]]=s[i]
  }
  return str;
}
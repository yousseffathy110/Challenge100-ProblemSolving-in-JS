const defangIPaddr = (address) => {
  let modstr = address.split(".").join("[.]");
  return modstr;
};

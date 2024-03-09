const x = (str) => {
  if (str.length === "" || str.length > 140) {
    return false;
  }
};

console.log(x(" "));

const findAll = (array, n) =>
  array
    .map((val, index) => (val === n ? index : -1))
    .filter((index) => index !== -1);

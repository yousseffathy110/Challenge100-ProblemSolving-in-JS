var cubeChecker = (volume, side) => {
  return volume > 0 && side > 0 ? side ** 3 === volume : false;
};

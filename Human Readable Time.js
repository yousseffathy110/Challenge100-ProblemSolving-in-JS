const humanReadable = (seconds) => {
  let hours = Math.floor(seconds / 3600),
    minutes = Math.floor((seconds % 3600) / 60),
    second = seconds % 60;
  const check = (num) => (num < 10 ? "0" : "") + num;
  return `${check(hours)}:${check(minutes)}:${check(second)}`;
};

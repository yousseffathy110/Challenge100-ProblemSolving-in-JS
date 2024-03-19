const leastInterval = (tasks, coolingTime) => {
  const frequencies = new Array(26).fill(0);
  tasks.forEach((task) => {
    frequencies[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  });
  frequencies.sort((a, b) => b - a);
  const maxFrequency = frequencies[0];
  let idleTime = (maxFrequency - 1) * coolingTime;
  frequencies.slice(1).forEach((freq) => {
    idleTime -= Math.min(maxFrequency - 1, freq);
  });
  idleTime = Math.max(0, idleTime);
  return tasks.length + idleTime;
};

export function taskFirst() {
  return 'I prefer const when I can.';
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  const combination = taskCombine();
  return combination;
}

function taskCombine() {
  const part1 = 'But sometimes let';
  const part2 = getLast();
  return part1.concat(part2);
}

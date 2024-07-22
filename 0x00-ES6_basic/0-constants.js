export function taskFirst() {
  return 'I prefer const when I can.';
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  const combination = ['But sometimes let', getLast()].join('');
  return combination;
}

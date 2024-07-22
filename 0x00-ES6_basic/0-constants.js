// Define a function that returns the task string
export function taskFirst() {
  return 'I prefer const when I can.';
}

// Define a function that returns the last part of the string
export function getLast() {
  return ' is okay';
}

// Define a function that combines the task string and the last part
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

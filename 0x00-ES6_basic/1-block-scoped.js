export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
// eslint-disable-line no-unused-vars
    const task = true;
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}

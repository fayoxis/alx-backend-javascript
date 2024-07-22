const tasks = {
  taskFirst: () => {
    const task = 'I prefer const when I can.';
    return task;
  },
  getLast: () => ' is okay',
  taskNext: () => {
    let combination = 'But sometimes let';
    combination += tasks.getLast();
    return combination;
  }
};

export const { taskFirst, getLast, taskNext } = tasks;

// Test the functions to ensure the same output
console.log(taskFirst()); // Output: 'I prefer const when I can.'
console.log(getLast()); // Output: ' is okay'
console.log(taskNext()); // Output: 'But sometimes let is okay'

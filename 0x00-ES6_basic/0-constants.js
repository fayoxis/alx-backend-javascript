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

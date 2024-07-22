const taskFirst = () => 'I prefer const when I can.';

const getLast = () => ' is okay';

const taskNext = () => {
  const combination = 'But sometimes let';
  return combination + getLast();
};

export { taskFirst, getLast, taskNext };

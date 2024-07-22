// Define a function to get the task string
const getTaskString = () => 'I prefer const when I can.';

// Define a function to get the last part of the string
const getLastPart = () => ' is okay';

// Define a function that combines the task string and the last part
const getCombinedString = () => {
  let combinedStr = 'But sometimes let';
  combinedStr += getLastPart();
  return combinedStr;
};

// Export the functions
export const taskFirst = getTaskString;
export const getLast = getLastPart;
export const taskNext = getCombinedString;

export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    for (const employee of item) {
      result += `${employee} | `;
    }
  }
  return result.slice(0, -3);
}

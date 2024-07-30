export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .filter(Boolean)
    .join('-');
}

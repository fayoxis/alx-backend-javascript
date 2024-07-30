export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredStrings = Array.from(set).filter(item => 
    typeof item === 'string' && item.startsWith(startString)
  );

  return filteredStrings
    .map(item => item.slice(startString.length))
    .filter(Boolean)
    .join('-');
}

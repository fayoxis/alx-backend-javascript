export default function containsAllArrayElements(collection, elements) {
  return elements.reduce((acc, current) => acc && collection.has(current), true);
}

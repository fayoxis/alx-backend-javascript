/**
 * the quantity of unique grocery items.
 * @param  map -  map of the name of a
 * grocery and its quantity.
 * @author <https://github.com/>
 */
export default function updateUniqueItems(map) {
  if (!Map.prototype.isPrototypeOf(map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

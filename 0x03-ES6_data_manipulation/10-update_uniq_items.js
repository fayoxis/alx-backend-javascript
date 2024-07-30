/**
 * the quantity of unique grocery items.
 * @param  map -  map of the name of a
 * grocery and its quantity.
 * @author <https://github.com/>
 */
export default function updateUniqueItems(olMap) {
  if (!(olMap instanceof Map)) throw Error('Cannot process');
  olMap.forEach((value, key) => {
    if (value === 1) olMap.set(key, 100);
  });
}

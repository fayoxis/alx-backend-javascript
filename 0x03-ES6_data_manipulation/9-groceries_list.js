/**
 * Creates and returns a Map of grocery items and their quantities.
 * @author <https://github.com/>
 * @returns {Map<string, Number>}
 */
export default function getGroceryInventory() {
  const groceryItems = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(groceryItems);
}

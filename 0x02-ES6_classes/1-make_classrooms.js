import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with specific sizes.
 * @returns {ClassRoom[]} An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map(size => new ClassRoom(size));
}

import ClassRoom from './0-classroom';

const createClassRoom = (capacity) => new ClassRoom(capacity);

const initializeRooms = () => [
  createClassRoom(19),
  createClassRoom(20),
  createClassRoom(34),
];

export default initializeRooms;

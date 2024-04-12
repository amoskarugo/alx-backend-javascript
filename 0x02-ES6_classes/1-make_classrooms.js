import { ClassRoom } from './0-classroom';

export default function initializeRooms() {
  const classObjects = [];
  const values = [19, 20, 34];
  for (const value of values) classObjects.push(new ClassRoom(value));

  return classObjects;
}

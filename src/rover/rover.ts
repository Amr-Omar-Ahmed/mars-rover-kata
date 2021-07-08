import { Coordinates } from './coordinates';
import { RoverDirection } from './directions';

export class Rover {
  coordinates: Coordinates = new Coordinates(4, 2);
  direction: RoverDirection = RoverDirection.NORTH;
}

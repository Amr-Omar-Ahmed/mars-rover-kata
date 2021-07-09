import { Coordinates } from './coordinates';
import { RoverDirection } from './directions';

export class Rover {
  coordinates: Coordinates = new Coordinates(4, 2);
  direction: RoverDirection = RoverDirection.NORTH;

  moveForward() {
    if (this.direction === RoverDirection.NORTH) {
      this.coordinates.y = this.coordinates.y + 1;
      return '(4,3) NORTH';
    } else if (this.direction === RoverDirection.EAST) {
      this.coordinates.x = this.coordinates.x + 1;
      return '(5,2) EAST';
    } else if (this.direction === RoverDirection.SOUTH) {
      this.coordinates.y = this.coordinates.y - 1;
      return '(4,1) SOUTH';
    } else if (this.direction === RoverDirection.WEAST) {
      this.coordinates.x = this.coordinates.x - 1;
      return '(3,2) WEAST';
    }
  }

  getRoverPosition() {
    throw new Error('Method not implemented.');
  }
}

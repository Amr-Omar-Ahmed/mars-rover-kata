import { Coordinates } from './coordinates';
import { RoverDirection } from './directions';

export class Rover {
  coordinates: Coordinates = new Coordinates(4, 2);
  direction: RoverDirection = RoverDirection.NORTH;

  moveForward() {
    if (this.direction === RoverDirection.NORTH) {
      this.coordinates.y = this.coordinates.y + 1;
      return this.getRoverPosition();
    } else if (this.direction === RoverDirection.EAST) {
      this.coordinates.x = this.coordinates.x + 1;
      return this.getRoverPosition();
    } else if (this.direction === RoverDirection.SOUTH) {
      this.coordinates.y = this.coordinates.y - 1;
      return this.getRoverPosition();
    } else if (this.direction === RoverDirection.WEAST) {
      this.coordinates.x = this.coordinates.x - 1;
      return this.getRoverPosition();
    }
  }

  getRoverPosition(): string {
    return `(${this.coordinates.x},${this.coordinates.y}) ${this.direction}`;
  }
}

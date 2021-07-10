import { Commands } from '../models/commands.interface';
import { RoverHeadings } from '../models/rover-headings.enum';

export class Position {
  constructor(
    public x: number,
    public y: number,
    public heading: RoverHeadings = RoverHeadings.NORTH
  ) {
    this.x = x;
    this.y = y;
  }

  getRoverPosition(): string {
    return `(${this.x},${this.y}) ${this.heading}`;
  }

  availableHeadingCommands: { [key: string]: Commands } = {
    [RoverHeadings.NORTH]: {
      F: (position: Position) => {
        position.y++;
      },
      B: (position: Position) => {
        position.y--;
      },
      R: (position: Position) => {
        position.heading = RoverHeadings.EAST;
      },
      L: (position: Position) => {
        position.heading = RoverHeadings.WEAST;
      },
    },
    [RoverHeadings.EAST]: {
      F: (position: Position) => {
        position.x++;
      },
      B: (position: Position) => {
        position.x--;
      },
      R: (position: Position) => {
        position.heading = RoverHeadings.SOUTH;
      },
      L: (position: Position) => {
        position.heading = RoverHeadings.NORTH;
      },
    },
    [RoverHeadings.SOUTH]: {
      F: (position: Position) => {
        position.y--;
      },
      B: (position: Position) => {
        position.y++;
      },
      R: (position: Position) => {
        position.heading = RoverHeadings.WEAST;
      },
      L: (position: Position) => {
        position.heading = RoverHeadings.EAST;
      },
    },
    [RoverHeadings.WEAST]: {
      F: (position: Position) => {
        position.x--;
      },
      B: (position: Position) => {
        position.x++;
      },
      R: (position: Position) => {
        position.heading = RoverHeadings.NORTH;
      },
      L: (position: Position) => {
        position.heading = RoverHeadings.SOUTH;
      },
    },
  };
}

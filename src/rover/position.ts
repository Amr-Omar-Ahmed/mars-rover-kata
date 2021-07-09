export class Position {
  x = 4;
  y = 2;
  heading: RoverHeadings = RoverHeadings.NORTH;

  getRoverPosition(): string {
    return `(${this.x},${this.y}) ${this.heading}`;
  }
}

export const HEADING_AVAILABLE_COMMANDS: { [key: string]: Commands } = {
  NORTH: {
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
};

export interface Commands {
  F: (position: Position) => void;
  B: (position: Position) => void;
  R: (position: Position) => void;
  L: (position: Position) => void;
}

export enum RoverHeadings {
  'NORTH' = 'NORTH',
  'EAST' = 'EAST',
  'SOUTH' = 'SOUTH',
  'WEAST' = 'WEAST',
}

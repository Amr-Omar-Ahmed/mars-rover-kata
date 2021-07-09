import { RoverDirection } from './directions';

export class Position {
  x = 4;
  y = 2;
  direction: RoverDirection = RoverDirection.NORTH;

  getRoverPosition(): string {
    return `(${this.x},${this.y}) ${this.direction}`;
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
  },
};

export interface Commands {
  F: (position: Position) => void;
  B: (position: Position) => void;
}

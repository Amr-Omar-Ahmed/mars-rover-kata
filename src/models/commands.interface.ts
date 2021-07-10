import { Position } from '../rover/position';

export interface Commands {
  F: (position: Position) => void;
  B: (position: Position) => void;
  R: (position: Position) => void;
  L: (position: Position) => void;
}

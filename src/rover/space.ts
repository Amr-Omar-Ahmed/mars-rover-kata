import { Position } from './position';

export class Space {
  position: Position = new Position(4, 2);
  obstacles: { x: number; y: number }[] = [];
}

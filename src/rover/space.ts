import { Position } from './position';

export class Space {
  position: Position = new Position();
  obstacles: { x: number; y: number }[] = [];
}

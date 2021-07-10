import { Position } from './position';
import { Space } from './space';

export class Rover {
  space: Space = new Space();

  excuteCommands(commands: string): string {
    let isRoverCanBeDamaged = false;
    let position: Position;
    commands.split('').forEach((command: 'F' | 'R' | 'L' | 'B') => {
      if (isRoverCanBeDamaged) {
        return;
      }
      position = this.space.position;
      const prevX = position.x;
      const prevY = position.y;
      const currentHeading = position.heading;
      position.availableHeadingCommands[currentHeading][command](position);
      isRoverCanBeDamaged = this.space.obstacles.some(
        (obs) => obs.x === position.x && obs.y === position.y
      );
      if (isRoverCanBeDamaged) {
        position.x = prevX;
        position.y = prevY;
      }
    });
    return `${this.space.position.getRoverPosition()}${isRoverCanBeDamaged ? ' STOPPED' : ''}`;
  }
}

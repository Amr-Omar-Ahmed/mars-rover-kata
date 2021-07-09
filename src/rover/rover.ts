import { HEADING_AVAILABLE_COMMANDS, Position } from './position';
import { Space } from './space';

export class Rover {
  space: Space = new Space();

  excuteCommands(commands: string): string {
    let isRoverCanBeDamaged = false;
    commands.split('').forEach((command: 'F' | 'R' | 'L' | 'B') => {
      if (isRoverCanBeDamaged) {
        return;
      }
      const prevX = this.space.position.x;
      const prevY = this.space.position.y;
      const currentHeading = this.space.position.heading;
      HEADING_AVAILABLE_COMMANDS[currentHeading][command](this.space.position);
      isRoverCanBeDamaged = this.space.obstacles.some(
        (obs) => obs.x === this.space.position.x && obs.y === this.space.position.y
      );
      if (isRoverCanBeDamaged) {
        this.space.position.x = prevX;
        this.space.position.y = prevY;
      }
    });
    return `${this.space.position.getRoverPosition()}${isRoverCanBeDamaged ? ' STOPPED' : ''}`;
  }
}

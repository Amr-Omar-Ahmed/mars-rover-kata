import { HEADING_AVAILABLE_COMMANDS, Position } from './position';
import { Space } from './space';

export class Rover {
  space: Space = new Space();

  excuteCommands(commands: string) {
    commands.split('').forEach((command: 'F' | 'R' | 'L' | 'B') => {
      const currentHeading = this.space.position.heading;
      HEADING_AVAILABLE_COMMANDS[currentHeading][command](this.space.position);
    });
  }
}

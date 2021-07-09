import { HEADING_AVAILABLE_COMMANDS, Position } from './position';

export class Rover {
  position: Position = new Position();

  excuteCommands(commands: string) {
    commands.split('').forEach((command: 'F') => {
      const currentHeading = this.position.heading;
      HEADING_AVAILABLE_COMMANDS[currentHeading][command](this.position);
    });
  }
}

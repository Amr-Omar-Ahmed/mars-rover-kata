import { expect } from 'chai';
import { Position, RoverHeadings } from '../rover/position';
import { Rover } from '../rover/rover';

describe('Rover with initial position is (4, 2) NORTH', () => {
  let rover: Rover;
  let initialPosition = `(4,2) ${RoverHeadings.NORTH}`;
  let position: Position;
  beforeEach(() => {
    rover = new Rover();
    position = rover.space.position;
  });

  describe('Get Rover Initial Position', () => {
    it('Get rover coordinates and direction', () => {
      expect(position.getRoverPosition()).to.equal(initialPosition);
    });
  });

  describe('Rover can excute commands', () => {
    describe('North Heading', () => {
      it('Should move forward four times with commands FFFF', () => {
        expect(rover.excuteCommands('FFFF')).to.equal(`(4,6) ${RoverHeadings.NORTH}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        expect(rover.excuteCommands('BBBB')).to.equal(`(4,-2) ${RoverHeadings.NORTH}`);
      });

      it('Should rotate right, and heading becomes at EAST', () => {
        expect(rover.excuteCommands('R')).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });

      it('Should rotate left, and heading becomes at WEAST', () => {
        expect(rover.excuteCommands('L')).to.equal(`(4,2) ${RoverHeadings.WEAST}`);
      });

      it('Should execute multiple commands', () => {
        expect(rover.excuteCommands('FFFFBBBBR')).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });
    });

    describe('EAST Heading', () => {
      beforeEach(() => {
        position.heading = RoverHeadings.EAST;
      });

      it('Should move forward four times with commands FFFF', () => {
        expect(rover.excuteCommands('FFFF')).to.equal(`(8,2) ${RoverHeadings.EAST}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        expect(rover.excuteCommands('BBBB')).to.equal(`(0,2) ${RoverHeadings.EAST}`);
      });

      it('Should rotate right, and heading becomes at SOUTH', () => {
        expect(rover.excuteCommands('R')).to.equal(`(4,2) ${RoverHeadings.SOUTH}`);
      });

      it('Should rotate left, and heading becomes at NORTH', () => {
        expect(rover.excuteCommands('L')).to.equal(`(4,2) ${RoverHeadings.NORTH}`);
      });
    });

    describe('SOUTH Heading', () => {
      beforeEach(() => {
        position.heading = RoverHeadings.SOUTH;
      });

      it('Should move forward four times with commands FFFF', () => {
        expect(rover.excuteCommands('FFFF')).to.equal(`(4,-2) ${RoverHeadings.SOUTH}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        expect(rover.excuteCommands('BBBB')).to.equal(`(4,6) ${RoverHeadings.SOUTH}`);
      });

      it('Should rotate right, and heading becomes at WEAST', () => {
        expect(rover.excuteCommands('R')).to.equal(`(4,2) ${RoverHeadings.WEAST}`);
      });

      it('Should rotate left, and heading becomes at EAST', () => {
        expect(rover.excuteCommands('L')).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });
    });

    describe('WEAST Heading', () => {
      beforeEach(() => {
        position.heading = RoverHeadings.WEAST;
      });

      it('Should move forward four times with commands FFFF', () => {
        expect(rover.excuteCommands('FFFF')).to.equal(`(0,2) ${RoverHeadings.WEAST}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        expect(rover.excuteCommands('BBBB')).to.equal(`(8,2) ${RoverHeadings.WEAST}`);
      });

      it('Should rotate right, and heading becomes at NORTH', () => {
        expect(rover.excuteCommands('R')).to.equal(`(4,2) ${RoverHeadings.NORTH}`);
      });

      it('Should rotate left, and heading becomes at SOUTH', () => {
        expect(rover.excuteCommands('L')).to.equal(`(4,2) ${RoverHeadings.SOUTH}`);
      });
    });

    describe('Execute multiple commands', () => {
      it('Should execute command FLFFFRFLB', () => {
        position.heading = RoverHeadings.EAST;
        expect(rover.excuteCommands('FLFFFRFLB')).to.equal(`(6,4) ${RoverHeadings.NORTH}`);
      });
    });
  });

  describe('When the rover enter a coordinate with an obstacle', () => {
    it('Rover should be stopped if report previous position', () => {
      rover.space.obstacles = [{ x: 4, y: 4 }];
      expect(rover.excuteCommands('FFFF')).to.equal(`(4,3) ${RoverHeadings.NORTH} STOPPED`);
    });
  });
});

import { assert, expect } from 'chai';
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
        rover.excuteCommands('FFFF');
        expect(position.getRoverPosition()).to.equal(`(4,6) ${RoverHeadings.NORTH}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(position.getRoverPosition()).to.equal(`(4,-2) ${RoverHeadings.NORTH}`);
      });

      it('Should rotate right, and heading becomes at EAST', () => {
        rover.excuteCommands('R');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });

      it('Should rotate left, and heading becomes at WEAST', () => {
        rover.excuteCommands('L');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.WEAST}`);
      });

      it('Should execute multiple commands', () => {
        rover.excuteCommands('FFFFBBBBR');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });
    });

    describe('EAST Heading', () => {
      beforeEach(() => {
        position.heading = RoverHeadings.EAST;
      });

      it('Should move forward four times with commands FFFF', () => {
        rover.excuteCommands('FFFF');
        expect(position.getRoverPosition()).to.equal(`(8,2) ${RoverHeadings.EAST}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(position.getRoverPosition()).to.equal(`(0,2) ${RoverHeadings.EAST}`);
      });

      it('Should rotate right, and heading becomes at SOUTH', () => {
        rover.excuteCommands('R');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.SOUTH}`);
      });

      it('Should rotate left, and heading becomes at NORTH', () => {
        rover.excuteCommands('L');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.NORTH}`);
      });
    });

    describe('SOUTH Heading', () => {
      beforeEach(() => {
        position.heading = RoverHeadings.SOUTH;
      });

      it('Should move forward four times with commands FFFF', () => {
        rover.excuteCommands('FFFF');
        expect(position.getRoverPosition()).to.equal(`(4,-2) ${RoverHeadings.SOUTH}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(position.getRoverPosition()).to.equal(`(4,6) ${RoverHeadings.SOUTH}`);
      });

      it('Should rotate right, and heading becomes at WEAST', () => {
        rover.excuteCommands('R');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.WEAST}`);
      });

      it('Should rotate left, and heading becomes at EAST', () => {
        rover.excuteCommands('L');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });
    });

    describe('WEAST Heading', () => {
      beforeEach(() => {
        position.heading = RoverHeadings.WEAST;
      });

      it('Should move forward four times with commands FFFF', () => {
        rover.excuteCommands('FFFF');
        expect(position.getRoverPosition()).to.equal(`(0,2) ${RoverHeadings.WEAST}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(position.getRoverPosition()).to.equal(`(8,2) ${RoverHeadings.WEAST}`);
      });

      it('Should rotate right, and heading becomes at NORTH', () => {
        rover.excuteCommands('R');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.NORTH}`);
      });

      it('Should rotate left, and heading becomes at SOUTH', () => {
        rover.excuteCommands('L');
        expect(position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.SOUTH}`);
      });
    });

    describe('Execute multiple commands', () => {
      it('Should execute command FLFFFRFLB', () => {
        position.heading = RoverHeadings.EAST;
        rover.excuteCommands('FLFFFRFLB');
        expect(position.getRoverPosition()).to.equal(`(6,4) ${RoverHeadings.NORTH}`);
      });
    });
  });
});

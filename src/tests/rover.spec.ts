import { assert, expect } from 'chai';
import { RoverHeadings } from '../rover/position';
import { Rover } from '../rover/rover';

describe('Rover with initial position is (4, 2) NORTH', () => {
  let rover: Rover;
  let initialPosition = `(4,2) ${RoverHeadings.NORTH}`;
  beforeEach(() => {
    rover = new Rover();
  });

  describe('Get Rover Initial Position', () => {
    it('Get rover coordinates and direction', () => {
      const position = rover.position.getRoverPosition();
      expect(position).to.equal(initialPosition);
    });
  });

  describe('Rover can excute commands', () => {
    describe('North Heading', () => {
      it('Should move forward four times with commands FFFF', () => {
        rover.excuteCommands('FFFF');
        expect(rover.position.getRoverPosition()).to.equal(`(4,6) ${RoverHeadings.NORTH}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(rover.position.getRoverPosition()).to.equal(`(4,-2) ${RoverHeadings.NORTH}`);
      });

      it('Should rotate right, and heading becomes at EAST', () => {
        rover.excuteCommands('R');
        expect(rover.position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });

      it('Should rotate left, and heading becomes at WEAST', () => {
        rover.excuteCommands('L');
        expect(rover.position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.WEAST}`);
      });

      it('Should execute multiple commands', () => {
        rover.excuteCommands('FFFFBBBBR');
        expect(rover.position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.EAST}`);
      });
    });

    describe('EAST Heading', () => {
      it('Should move forward four times with commands FFFF', () => {
        rover.excuteCommands('FFFF');
        expect(rover.position.getRoverPosition()).to.equal(`(8,2) ${RoverHeadings.EAST}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(rover.position.getRoverPosition()).to.equal(`(0,2) ${RoverHeadings.EAST}`);
      });

      it('Should rotate right, and heading becomes at EAST', () => {
        rover.excuteCommands('R');
        expect(rover.position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.WEAST}`);
      });

      it('Should rotate left, and heading becomes at NORTH', () => {
        rover.excuteCommands('L');
        expect(rover.position.getRoverPosition()).to.equal(`(4,2) ${RoverHeadings.NORTH}`);
      });
    });
  });
});

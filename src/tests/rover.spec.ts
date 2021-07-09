import { assert, expect } from 'chai';
import { RoverDirection } from '../rover/directions';
import { Rover } from '../rover/rover';

describe('Rover with initial position is (4, 2) NORTH', () => {
  let rover: Rover;
  let initialPosition = `(4,2) ${RoverDirection.NORTH}`;
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
        expect(rover.position.getRoverPosition()).to.equal(`(4,6) ${RoverDirection.NORTH}`);
      });

      it('Should move backward four times with commands BBBB', () => {
        rover.excuteCommands('BBBB');
        expect(rover.position.getRoverPosition()).to.equal(`(4,-2) ${RoverDirection.NORTH}`);
      });
    });
  });
});

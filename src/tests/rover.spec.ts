import { assert, expect } from 'chai';
import { RoverDirection } from '../rover/directions';
import { Rover } from '../rover/rover';

describe('Rover with initial position is (4, 2) NORTH', () => {
  let rover: Rover;
  beforeEach(() => {
    rover = new Rover();
  });

  describe('Rover can move forward', () => {
    it('When rover heading is at North, y coordinate should be increment with one', () => {
      rover.direction = RoverDirection.NORTH;
      const result = rover.moveForward();
      expect(result).to.equal('(4,3) NORTH');
    });

    it('When rover heading is at East, x coordinate should be increment with one', () => {
      rover.direction = RoverDirection.EAST;
      const result = rover.moveForward();
      expect(result).to.equal('(5,2) EAST');
    });

    it('When rover heading is at South, y coordinate should be decrement by one', () => {
      rover.direction = RoverDirection.SOUTH;
      const result = rover.moveForward();
      expect(result).to.equal('(4,1) SOUTH');
    });

    it('When rover heading is at Weast, x coordinate should be decrement by one', () => {
      rover.direction = RoverDirection.WEAST;
      const result = rover.moveForward();
      expect(result).to.equal('(3,2) WEAST');
    });
  });

  describe('Get Rover Position', () => {
    it('Get rover coordinates and direction', () => {
      const position = rover.getRoverPosition();
      expect(position).to.equal('(4,2) NORTH');
    });
  });
});

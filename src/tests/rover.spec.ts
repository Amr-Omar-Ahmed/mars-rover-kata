import { assert, expect } from 'chai';
import { Rover } from '../rover/rover';

describe('Rover', () => {
  let rover: Rover;
  beforeEach(() => {
    rover = new Rover();
  });

  it('Rover can move forward', () => {
    const result = rover.moveForward();
    expect(result).to.equal('(4,3) NORTH');
  });
});

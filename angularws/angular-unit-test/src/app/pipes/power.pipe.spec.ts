import { PowerPipe } from './power.pipe';

describe('PowerPipe', () => {
  let pipe:PowerPipe | null ;
  beforeEach(() => {
    pipe = new PowerPipe();
  });
  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });
  it('providing no value returns base to power 2', () => {
    expect(pipe?.transform(3)).toBe(9);
  });
  it('providing a value returns base to that power', () => {
    expect(pipe?.transform(3, 5)).toBe(3**5);
  });
});

import { PersonPrefixPipe } from './person-prefix.pipe';

describe('PersonPrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonPrefixPipe();
    expect(pipe).toBeTruthy();
  });
});

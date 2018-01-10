import {FormatDatePipe} from '../../src/core/core.formatdate';

describe('Format date pipe', () => {
  const pipe = new FormatDatePipe('en');

  it('Can format', () => {
    expect(pipe.transform(new Date(1988, 2, 5))).toEqual('05.03.1988');
  });
});

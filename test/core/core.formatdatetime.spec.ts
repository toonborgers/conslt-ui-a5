import {FormatDateTimePipe} from '../../src/core/core.formatdatetime';

describe('Format date time pipe', () => {
  const pipe = new FormatDateTimePipe('en');

  it('Can format', () => {
    expect(pipe.transform(new Date(1988, 2, 5, 10, 20, 30))).toEqual('05.03.1988 / 10:20');
  });
});

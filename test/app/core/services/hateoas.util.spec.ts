import {HateoasUtil} from '../../../../src/app/core/services/hateoas.util';

describe('Hateoas Util', () => {
  let util: HateoasUtil;
  const objectWithoutLinks = {};
  const rel = 'rel';
  const href = '/v1/jos';
  const objectWithLink = {
    links: [{rel, href}]
  };

  beforeEach(() => {
    util = new HateoasUtil();
  });

  it('When no links attribute, return null', () => {
    expect(util.getLink(objectWithoutLinks, '')).toBeNull();
  });

  it('When link not found, return null', () => {
    expect(util.getLink(objectWithLink, 'patrick')).toBeNull();
  });

  it('When link found, return href', () => {
    expect(util.getLink(objectWithLink, rel)).toEqual(href);
  });
});

import {Injectable} from '@angular/core';

@Injectable()
export class HateoasUtil {
  getLink(object: any, rel: string): string {
    if (!object.hasOwnProperty('links')) {
      return null;
    }

    const links = object.links as Array<any>;
    const link = links.find(l => l.rel === rel);

    return link ? link.href : null;
  }
}

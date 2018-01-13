import {Injectable} from '@angular/core';
import {ObjectWithHateoasLinks} from '../../domain/objectWithHateoasLinks';

@Injectable()
export class HateoasUtil {
  getLink(object: ObjectWithHateoasLinks, rel: string): string {
    const link = object.links.find(l => l.rel === rel);

    return link ? link.href : null;
  }
}

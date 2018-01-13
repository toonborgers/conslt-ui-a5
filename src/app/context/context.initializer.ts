import {ContextService} from './context.service';
import {WindowProvider} from '../core/window';
import {Injectable} from '@angular/core';

@Injectable()
export class ContextInitializer {
  constructor(private contextService: ContextService, private window: WindowProvider) {
  }

  initialize(): Promise<any> {
    const queryParams = this.parseSearch();
    this.contextService.orderDetailUrl = queryParams.get('orderDetailUrl');
    this.contextService.requestedOrderDetailUrl = queryParams.get('orderDetailUrl');
    this.contextService.baseUrl = this.window.nativeWindow.location.origin + '/';

    return Promise.resolve(null);
  }

  private parseSearch(): Map<string, string> {
    const result = new Map();
    const search = this.window.nativeWindow.location.search;

    if (search === '') {
      return result;
    }

    search.substr(1)
      .split('&')
      .map(part => part.split('='))
      .forEach(part => result.set(part[0], part[1]));

    return result;
  }
}

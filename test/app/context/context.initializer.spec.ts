import {ContextInitializer} from '../../../src/app/context/context.initializer';
import {ContextService} from '../../../src/app/context/context.service';
import {instance, mock, when} from 'ts-mockito';
import {WindowProvider} from '../../../src/app/core/window';

describe('Context initializer', () => {
  const contextService = {} as ContextService;
  const orderDetailUrl = 'url';
  const search = `?orderDetailUrl=${orderDetailUrl}`;
  const baseUrl = 'full url';

  let initializer: ContextInitializer;

  beforeEach(() => {
    const windowProvider = mock(WindowProvider);
    when(windowProvider.nativeWindow).thenReturn({location: {search, origin: baseUrl} as Location} as Window);

    initializer = new ContextInitializer(contextService, instance(windowProvider));
  });

  describe('Initialize', () => {
    it('Parses query params for order detail url and requested order detail url', () => {
      initializer.initialize();

      expect(contextService.orderDetailUrl).toEqual(orderDetailUrl);
      expect(contextService.requestedOrderDetailUrl).toEqual(orderDetailUrl);
    });

    it('baseUrl is set', () => {
      initializer.initialize();

      expect(contextService.baseUrl).toEqual(`${baseUrl}/`);
    });
  });
});

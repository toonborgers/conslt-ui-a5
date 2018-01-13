import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {WindowProvider} from '../../core/window';
import {EventbusService} from '../../core/services/eventbus.service';
import {Message} from './message';

@Injectable()
export class MessagingService {
  private window: Window;
  private isInIframe: boolean;
  private renderer: Renderer2;

  constructor(windowProvider: WindowProvider, private eventBus: EventbusService, rendererFactory: RendererFactory2) {
    this.window = windowProvider.nativeWindow;
    this.isInIframe = this.window !== this.window.parent;
    this.renderer = rendererFactory.createRenderer(null, null);

    this.registerListener();
  }

  sendMessage(message: Message) {

  }

  private registerListener() {
    this.renderer.listen('window', 'message', MessagingService.handleMessage.bind(this));
  }

  private static handleMessage(event: Event) {
    const message = event as MessageEvent;

    console.log(message.data);
  }
}

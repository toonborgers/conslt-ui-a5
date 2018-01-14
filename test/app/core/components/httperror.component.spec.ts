import {async, TestBed} from '@angular/core/testing';
import {TranslationModule} from '../../../../src/app/translate/module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpErrorComponent} from '../../../../src/app/core/components/httperror.component';
import {EventbusService, EventType} from '../../../../src/app/core/services/eventbus.service';
import {TranslationService} from '../../../../src/app/translate/services/translate.service';
import {anyString, anything, instance, mock, when} from 'ts-mockito';

describe('Http error component', () => {
  describe('Rendering', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, TranslationModule],
        providers: [EventbusService],
        declarations: [
          HttpErrorComponent
        ],
      }).compileComponents();
    }));


    it('Component is hidden by default', async(() => {
      const fixture = TestBed.createComponent(HttpErrorComponent);
      fixture.detectChanges();

      expect(fixture.debugElement.children.length).toEqual(0);
    }));

    it('When showError true, component is shown', async(() => {
      const fixture = TestBed.createComponent(HttpErrorComponent);
      fixture.componentInstance.showError = true;
      fixture.detectChanges();

      expect(fixture.debugElement.children.length).toEqual(1);
    }));
  });

  describe('Event bus listener', () => {
    const translation = 'Translation';
    let eventbusService: EventbusService;

    let component: HttpErrorComponent;

    beforeEach(() => {
      const translationService = mock(TranslationService);
      when(translationService.translate('consultui.httpError.noInfoAvailable')).thenReturn(translation);
      eventbusService = new EventbusService();
      component = new HttpErrorComponent(instance(translationService), eventbusService);
      component.ngOnInit();
    });

    it('When error event, show error becomes true', () => {
      eventbusService.emit(EventType.HTTP_ERROR, 123);

      expect(component.showError).toBeTruthy();
      expect(component.severity).toEqual('');
      expect(component.message).toEqual('');
    });

    it('When 404 error event, set severity and message', () => {
      eventbusService.emit(EventType.HTTP_ERROR, 404);

      expect(component.showError).toBeTruthy();
      expect(component.severity).toEqual('warn');
      expect(component.message).toEqual(translation);
    });
  });
});

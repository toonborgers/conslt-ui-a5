import {Component, OnInit} from '@angular/core';
import {TranslationService} from '../../translate/services/translate.service';
import {EventbusService, EventType} from '../services/eventbus.service';

@Component({
  selector: 'cui-http-error',
  templateUrl: './httperror.component.html',
  styleUrls: ['./httperror.component.scss']
})
export class HttpErrorComponent implements OnInit {
  message = '';
  severity = '';
  showError = false;

  constructor(private translationService: TranslationService, private eventbusService: EventbusService) {
  }

  ngOnInit(): void {
    this.eventbusService
      .observe(EventType.HTTP_ERROR)
      .subscribe(httpStatus => {
        this.showError = true;

        if (httpStatus === 404) {
          this.severity = 'warn';
          this.message = this.translationService.translate('consultui.httpError.noInfoAvailable');
        }
      });
  }
}


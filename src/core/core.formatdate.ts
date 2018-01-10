import {DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

export const FORMAT = 'dd.MM.yyyy';

@Pipe({name: 'formatDate'})
export class FormatDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, FORMAT);
  }
}

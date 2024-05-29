import { formatDate } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DateFormatConstant } from '../constants/date-format.constant';
import { DateFormatArgInterface } from '../interfaces/date-format-arg.interface';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  default: string = DateFormatConstant.DATE_TIME_DISPLAY_FORMAT;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: string | number | Date | null | undefined, format?: DateFormatArgInterface | string): string | null {
    if (!value) {
      return null;
    }

    if (!format) {
      return formatDate(value, this.default, this.locale);
    }

    if (typeof format === 'string') {
      return formatDate(value, format, this.locale);
    }

    return formatDate(value, format.format, this.locale);
  }
}

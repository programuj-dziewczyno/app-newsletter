import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, Observable, shareReplay, timer } from 'rxjs';
import { DateFormatConstant } from '../../constants/date-format.constant';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private dataService: DataService = inject(DataService);

  DateFormatConstant = DateFormatConstant;
  
  date$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  getDate() {
    return this.dataService.date();
  }
}

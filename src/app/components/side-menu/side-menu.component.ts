import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DateInterface, MonthInterface } from '../../interfaces/date.interface';
import { DataService } from '../../services/data.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  private httpService: HttpService = inject(HttpService);
  private dataService: DataService = inject(DataService);
  private renderer: Renderer2 = inject(Renderer2);
  private router: Router = inject(Router);

  dates$: Observable<DateInterface[]> = this.httpService.dates$;

  trackByIndex(index: number) {
    return index;
  }

  handleMonthChanged(yearName: string, month: MonthInterface, event: Event) {
    this.dataService.date.set(`${month.monthName} ${yearName}`);
    this.addClickedClass(event);
    this.router.navigate(['archiwum/', yearName, month.monthLink]);
  }

  private addClickedClass(event: Event) {
    this.renderer.addClass(event.target, 'clicked');
  }
}

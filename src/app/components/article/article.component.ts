import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DateFormatConstant } from '../../constants/date-format.constant';
import { NoteInterface } from '../../interfaces/note.interface';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  DateFormatConstant = DateFormatConstant;
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  note$: Observable<NoteInterface> = this.activatedRoute.data.pipe(map(data => data['note']));
}

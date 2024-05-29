import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { NoteInterface } from '../../interfaces/note.interface';
import { ShortComponent } from '../short/short.component';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [CommonModule, ShortComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  notes$: Observable<NoteInterface[]> = this.activatedRoute.data.pipe(map(data => data['notes'])).pipe(map(data => data.notes));

  trackByIndex(index: number) {
    return index;
  }
}

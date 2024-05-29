import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { NoteInterface } from '../interfaces/note.interface';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service'; 

export const NoteResolver: ResolveFn<NoteInterface> = (route, state) => {
  const httpService: HttpService = inject(HttpService);
  const dataService: DataService = inject(DataService);

  const id = route.paramMap.get('id')!;
  dataService.date.set(id);
  return httpService.getNote(id);
}

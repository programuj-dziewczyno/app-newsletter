import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { NotesDtoInterface } from '../interfaces/notes-dto.interface';
import { HttpService } from '../services/http.service'; 

export const NotesArchiveResolver: ResolveFn<NotesDtoInterface> = (route, state) => {
  const httpService: HttpService = inject(HttpService);
  const year = route.paramMap.get('year')!;
  const month = route.paramMap.get('month')!;
  return httpService.getNotesForArchive(month, year);
}

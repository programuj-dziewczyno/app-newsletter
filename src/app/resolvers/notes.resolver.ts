import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { NotesDtoInterface } from '../interfaces/notes-dto.interface';
import { HttpService } from '../services/http.service'; 

export const NotesResolver: ResolveFn<NotesDtoInterface> = (route, state) => {
  const httpService: HttpService = inject(HttpService);
  return httpService.getNotes();
}

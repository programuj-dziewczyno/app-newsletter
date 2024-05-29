import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap, map } from 'rxjs';
import { DateInterface } from '../interfaces/date.interface';
import { NoteInterface } from '../interfaces/note.interface';
import { NotesDtoInterface } from '../interfaces/notes-dto.interface';
import { getMonthsFronNotes } from '../utils/dates.util';
import { getNotesArchive } from '../utils/notes.util';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly url: string = '../assets/notes.json';

  private notesSubject = new Subject<NotesDtoInterface>();
  private datesSubject = new Subject<DateInterface[]>();

  notes$ = this.notesSubject.asObservable();
  dates$ = this.datesSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<NotesDtoInterface> {
    return this.httpClient.get<NotesDtoInterface>(this.url).pipe(
      tap(value => {
        this.setNotesSubject(value);
        this.setMonthsSubject(getMonthsFronNotes(value));
      })
    );
  }

  // TODO: add protection in case of missing data
  getNotesForArchive(month: string, year: string): Observable<NotesDtoInterface> {
    return this.getNotes().pipe(
      map(notesDto => getNotesArchive(notesDto, month, year)),
    )
  }

  // TODO: add protection in case of missing data
  getNote(link: string): NoteInterface {
    return (<unknown>this.getNotes().pipe(
      map(notesDto => notesDto.notes.find(note => note.article_link === link),
      )) as NoteInterface
    )
  }

  private setNotesSubject(notes: NotesDtoInterface) {
    this.notesSubject.next(notes);
  }

  private setMonthsSubject(dates: DateInterface[]) {
    this.datesSubject.next(dates);
  }
}

import { NoteInterface } from './note.interface';

export interface NotesDtoInterface {
  notes: NoteInterface[],
  total: number,
}

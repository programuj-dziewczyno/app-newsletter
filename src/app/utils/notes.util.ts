import { NotesDtoInterface } from "../interfaces/notes-dto.interface";

export function getNotesArchive(notesDto: NotesDtoInterface, month: string, year: string): NotesDtoInterface {
  const notesForArchive = notesDto.notes.filter(note => !!(note.month === month && note.year === year));

  return {
    notes: notesForArchive,
    total: notesForArchive.length,
  }
}

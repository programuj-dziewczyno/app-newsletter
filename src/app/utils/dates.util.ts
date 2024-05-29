import { MONTH_NAMES } from '../constants/months.constant';
import { MonthEnum } from '../enums/months.enum';
import { DateInterface, MonthInterface } from '../interfaces/date.interface';
import { NoteInterface } from '../interfaces/note.interface';
import { NotesDtoInterface } from '../interfaces/notes-dto.interface';
import { mapToUniqueMonths } from '../mappers/dates.mapper';

export function getMonthsFronNotes(notesDto: NotesDtoInterface): DateInterface[] {
  const notesByYear = groupByYear(notesDto.notes);
  const monthsFromNotesByYear = getMonthsFromNotesByYear(notesByYear);
  const uniqueMonths = mapToUniqueMonths(monthsFromNotesByYear);
  return uniqueMonths;
}

function getMonthsFromNotesByYear(notesByYear: { [key: string]: NoteInterface[]; }): DateInterface[] {
  let monthsFromNotesByYear: DateInterface[] = [];

  for (const prop in notesByYear) {
    monthsFromNotesByYear.push({ yearName: prop, months: getMonths(notesByYear[prop]) })
  }

  return monthsFromNotesByYear;
}

function getMonths(notes: NoteInterface[]): MonthInterface[] {
  return notes.map(element => {
    return {
      monthLink: element.month,
      monthName: MONTH_NAMES[element.month as MonthEnum]
    }
  });
}

// TODO: add types
function groupByYear(notes: NoteInterface[]): { [key: string]: NoteInterface[]; } {
  return notes.reduce(
    (accumulator: any, currentValue: any) => { 
      (accumulator[currentValue['year']] = accumulator[currentValue['year']] || []).push(currentValue);
      return accumulator;
  }, {});
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DateFormatConstant } from '../../constants/date-format.constant';
import { NoteInterface } from '../../interfaces/note.interface';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'short',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './short.component.html',
  styleUrl: './short.component.scss'
})
export class ShortComponent {
  @Input() note!: NoteInterface;
  DateFormatConstant = DateFormatConstant;
}

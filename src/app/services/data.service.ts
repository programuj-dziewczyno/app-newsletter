import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  date = signal<string>('');
}

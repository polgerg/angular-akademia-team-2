import { Injectable } from '@angular/core';
import { StickyNote } from './models/sticky-note.model';

@Injectable({
  providedIn: 'root'
})
export class StickNotesService {

  stickyNotes?: StickyNote[]

  constructor() { 
    this.stickyNotes = []
  }

  addNote(note: StickyNote): void {
    this.stickyNotes?.push(note)
  }
}

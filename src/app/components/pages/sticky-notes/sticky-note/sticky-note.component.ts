import { Component, Input, OnInit } from '@angular/core';
import { StickyNote } from '../models/sticky-note.model';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  @Input() note?: StickyNote

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { StickNotesService } from '../stick-notes.service';

@Component({
  selector: 'app-sticky-notes-list',
  templateUrl: './sticky-notes-list.component.html',
  styleUrls: ['./sticky-notes-list.component.scss']
})
export class StickyNotesListComponent implements OnInit {

  constructor(public noteService: StickNotesService) { }

  ngOnInit(): void {
  }

}

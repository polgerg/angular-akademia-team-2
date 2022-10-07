import { Component, Input, OnInit } from '@angular/core';
import { AlignmentService } from '../alignment-bar/alignment.service';
import { StickyNote } from '../models/sticky-note.model';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  @Input() note?: StickyNote

  constructor(public alignmentService: AlignmentService) { }

  ngOnInit(): void {
  }

}

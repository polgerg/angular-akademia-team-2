import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { StickNotesService } from './stick-notes.service';
import { StickyNoteFormComponent } from './sticky-note-form/sticky-note-form.component';

import { StickyNotesComponent } from './sticky-notes.component';

describe('StickyNotesComponent', () => {
  let component: StickyNotesComponent;
  let fixture: ComponentFixture<StickyNotesComponent>;
  let el: any;
  let noteService: StickNotesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyNotesComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StickyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
    noteService = new StickNotesService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new note', () => {
    const titleInput: HTMLInputElement = el.querySelector('#stickyTitleInput');
    const noteInput: HTMLInputElement = el.querySelector('#stickyNoteInput');

    titleInput.value = 'Test Title';
    titleInput.dispatchEvent(new Event('input'));
    noteInput.value = 'Test Note';
    noteInput.dispatchEvent(new Event('input'));

    const form: HTMLFormElement = el.querySelector('#stickyNoteForm');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(el.querySelectorAll('.note-div').length).toBe(1);
  });

  it('should delete all notes', () => {
    noteService.addNote({stickyTitle: 'test1', stickyNote: 'test1', id: '1234'});
    noteService.addNote({stickyTitle: 'test2', stickyNote: 'test2', id: '4321'});
    fixture.detectChanges();
    console.log('length:', noteService.stickyNotes?.length);
    const deleteAllBtn: HTMLButtonElement = fixture.debugElement.query(By.css('#deleteAllBtn')).nativeElement;
    console.log(deleteAllBtn);

    deleteAllBtn.click()
    fixture.detectChanges()
    expect(el.querySelectorAll('.note-div').length).toBe(0)
  })

});

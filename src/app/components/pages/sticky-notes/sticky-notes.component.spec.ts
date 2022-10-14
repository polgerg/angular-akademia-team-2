import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { StickyNotesComponent } from './sticky-notes.component';

describe('StickyNotesComponent', () => {
  let component: StickyNotesComponent;
  let fixture: ComponentFixture<StickyNotesComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyNotesComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StickyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
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

  it('should delete all notes if delete all button is clicked', () => {
    // find input fields in new note form
    const titleInput: HTMLInputElement = el.querySelector('#stickyTitleInput');
    const noteInput: HTMLInputElement = el.querySelector('#stickyNoteInput');

    // give test values for first note
    titleInput.value = 'Test Title';
    titleInput.dispatchEvent(new Event('input'));
    noteInput.value = 'Test Note';
    noteInput.dispatchEvent(new Event('input'));

    // find form element and submit the first note
    const form: HTMLFormElement = el.querySelector('#stickyNoteForm');
    form.dispatchEvent(new Event('submit'));

    // give test values for second note
    titleInput.value = 'Test Title 2';
    titleInput.dispatchEvent(new Event('input'));
    noteInput.value = 'Test Note 2';
    noteInput.dispatchEvent(new Event('input'));

    // submit the second note
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    // find delete all button and check if it works
    const deleteAllBtn: HTMLButtonElement = el.querySelector('#deleteAllBtn');
    deleteAllBtn.click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.note-div').length).toBe(0);
  });

  /*   it('should delete a note by id', () => {

    const titleInput: HTMLInputElement = el.querySelector('#stickyTitleInput');
    const noteInput: HTMLInputElement = el.querySelector('#stickyNoteInput');

    titleInput.value = 'Test Title';
    titleInput.dispatchEvent(new Event('input'));
    noteInput.value = 'Test Note';
    noteInput.dispatchEvent(new Event('input'));

    const form: HTMLFormElement = el.querySelector('#stickyNoteForm');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    const deleteNoteButton: HTMLButtonElement = el.querySelector('');
    deleteNoteButton.click();
    fixture.detectChanges();
    expect(el.querySelector('')).toBeFalsy();
  }); */
});

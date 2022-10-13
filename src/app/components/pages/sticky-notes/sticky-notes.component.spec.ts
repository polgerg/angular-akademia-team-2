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
  let el: DebugElement;
  let noteService: StickNotesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyNotesComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StickyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
    noteService = new StickNotesService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Sticky Notes in h1 tag', () => {
    let h1tag = el.query(By.css('#sticky-notes-title'));
    expect(h1tag.nativeElement.textContent).toContain('Sticky Notes');
  });

  it('should render Add note button', fakeAsync(() => {
    const stickyTitleInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#stickyTitleInput');
    stickyTitleInput.value = 'teszt';
    const addNoteButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('#add-note-btn');
    console.log(addNoteButton);
    stickyTitleInput.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    addNoteButton.click();
    tick();
    console.log(noteService.stickyNotes);
    expect(noteService.stickyNotes?.length).toEqual(1);
    // expect(noteService.stickyNotes)
  }));
});

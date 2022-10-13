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

  it('should render Sticky Notes in h1 tag', () => {
    let h1tag = el.query(By.css('#sticky-notes-title'));
    expect(h1tag.nativeElement.textContent).toContain('Sticky Notes');
  });

  it('should create a new note', fakeAsync(() => {
    const titleInput: HTMLInputElement = el.querySelector('#stickyTitleInput');
    const noteInput: HTMLInputElement = el.querySelector('#stickyNoteInput');

    titleInput.value = 'Test Title';
    titleInput.dispatchEvent(new Event('input'));
    noteInput.value = 'Test Note';
    noteInput.dispatchEvent(new Event('input'));

    const form: HTMLFormElement = el.querySelector('#stickyNoteForm');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    tick();
    expect(el.querySelectorAll('.note-div').length).toBe(1);
  }));
});

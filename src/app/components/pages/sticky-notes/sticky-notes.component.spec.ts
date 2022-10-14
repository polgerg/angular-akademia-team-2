import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { StickNotesService } from './stick-notes.service';

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
    noteService.addNote({
      stickyTitle: 'test1',
      stickyNote: 'test1',
      id: '1234',
    });
    noteService.addNote({
      stickyTitle: 'test2',
      stickyNote: 'test2',
      id: '4321',
    });
    fixture.detectChanges();
    console.log('length:', noteService.stickyNotes?.length);
    const deleteAllBtn: HTMLButtonElement = fixture.debugElement.query(
      By.css('#deleteAllBtn')
    ).nativeElement;
    console.log(deleteAllBtn);

    deleteAllBtn.click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.note-div').length).toBe(0);
  });

  it('should delete a note by id', () => {
    noteService.addNote({
      stickyTitle: 'test1',
      stickyNote: 'test1',
      id: '1234',
    });
    noteService.addNote({
      stickyTitle: 'test2',
      stickyNote: 'test2',
      id: '4321',
    });
    fixture.detectChanges();
    const deleteNoteButton:HTMLElement = fixture.debugElement.query(By.css('#1234'));
  })
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { HomeComponent } from './components/home/home.component';
import { BlackBoxComponent } from './components/black-box/black-box.component';
import { BlackBoxesComponent } from './components/black-boxes/black-boxes.component';
import { StickyNotesComponent } from './components/pages/sticky-notes/sticky-notes.component';
import { StickyNoteEditFormComponent } from './components/pages/sticky-notes/sticky-note-edit-form/sticky-note-edit-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard], children: [
    { path: 'task1', component: BlackBoxComponent },
    { path: 'task2', component: BlackBoxesComponent },
    { path: 'sticky-notes', component: StickyNotesComponent },
    { path: 'sticky-notes/edit/:id', component: StickyNoteEditFormComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

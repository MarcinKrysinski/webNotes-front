import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: NotesComponent,
    pathMatch: 'full'
  },
  {
    path: 'note-details/:id',
    component: NoteDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

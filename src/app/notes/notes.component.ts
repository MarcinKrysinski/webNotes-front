import {Component, OnInit} from '@angular/core';
import {Note} from '../model/note';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note [];

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(): void {
    this.apiService.getAllNotes().subscribe(res => {
      this.notes = res;
    }, error => console.log(error));
  }

  updateNote(id: number): void {
    this.router.navigate(['note-details', id]);
  }

  deleteNote(id: number): void {
    this.apiService.deleteNote(id).subscribe(
      () => {
        this.notes = this.notes.filter(note => note.id !== id);
      }
    );
  }

}

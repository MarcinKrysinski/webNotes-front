import { Component, OnInit } from '@angular/core';
import {Note} from '../model/note';
import {Router} from '@angular/router';
import {ApiService} from '../shared/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note: Note = new Note();
  constructor(private apiService: ApiService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  saveNote(): void{
    this.apiService.addNote(this.note).subscribe( data => {
    }, error => console.log(error));
    this.location.back();

  }
  goToNoteList(): void{
    this.router.navigate(['/notes']);
  }
  onSubmit(): void {
    this.saveNote();
    this.goToNoteList();
  }
}

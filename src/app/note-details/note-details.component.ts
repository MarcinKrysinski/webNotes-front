import {Component, OnInit} from '@angular/core';
import {Note} from '../model/note';
import {ApiService} from '../shared/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  id: number;
  note: Note = new Note();
  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.apiService.getNote(this.id).subscribe( data => {
      this.note = data;
      console.log(this.note);
    }, error => {
      console.log(error);
    });
  }

  onSubmit(): void {
    this.apiService.updateNote(this.id, this.note).subscribe( data => {
    }, error => {
      console.log(error);
    });
    this.location.back();
  }

  remove(): void {
    this.apiService.deleteNote(this.id).subscribe(data => {
    }, error => {
      console.log(error);
    });
    this.location.back();
  }
}

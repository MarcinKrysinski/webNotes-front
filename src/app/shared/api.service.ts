import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) {
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.BASE_URL);
  }

  getNote(id: number): Observable<Note> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Note>(url);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.BASE_URL, note);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.BASE_URL, note);
  }

  deleteNote(id: number): Observable<any> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete(url);

  }

}

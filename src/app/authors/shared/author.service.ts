import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from './author.model';

@Injectable()
export class AuthorService {
  urlAuthor = 'http://fakerestapi.azurewebsites.net/api/Authors';
 
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.urlAuthor);
  }

  getAuthor(ID: number): Observable<Author> {
    return this.http.get<Author>(`${this.urlAuthor}/${ID}`);
  }

}

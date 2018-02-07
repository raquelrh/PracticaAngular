import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book.model';

@Injectable()
export class BookService {
  urlBooks = 'http://fakerestapi.azurewebsites.net/api/Books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlBooks);
  }

  getBook(ID: number): Observable<Book> {
    return this.http.get<Book>(`${this.urlBooks}/${ID}`);
  }
}

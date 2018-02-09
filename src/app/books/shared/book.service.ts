import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book.model';
import { Author } from '../../authors/shared/author.model';

@Injectable()
export class BookService {
  urlBooks = 'http://fakerestapi.azurewebsites.net/api/Books';
  urlAuthorsBook = 'https://fakerestapi.azurewebsites.net/api/Authors/books/';
  urlAuthors = 'https://fakerestapi.azurewebsites.net/api/Authors';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlBooks);
  }

  getBook(ID: number): Observable<Book> {
    // alert("getBook("+ID+")");
    return this.http.get<Book>(`${this.urlBooks}/${ID}`);
  }

  getAuthorsBook(IDBook: number): Observable<Author[]> {
    // alert("getAuthorsBook("+IDBook+")")
    if (IDBook != null) {
      return this.http.get<Author[]>(`${this.urlAuthorsBook}/${IDBook}`);
    } else {
      return this.http.get<Author[]>(`${this.urlAuthors}`);
    }
  }

  postBook(book: any): Observable<Book> {
    return this.http.post<Book>(this.urlBooks, book);
  }

}

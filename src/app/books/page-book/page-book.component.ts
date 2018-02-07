import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';
// import { Opcion } from '../../core/shared/opcion.model';

@Component({
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrls: ['./page-book.component.css']
})
export class PageBookComponent implements OnInit {
  books: Book[];
  // options: Opcion[];
  // orderBy: string;

  constructor(private booksService: BookService) {
    // this.options = [
    //   {text: 'ID', value: 'ID'},
    //   {text: 'Título', value: 'título'},
    //   {text: 'Descripción', value: 'descripcion'},
    // ];
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {   
    this.booksService.getBooks()
      .subscribe(books => this.books = books);
  }

}

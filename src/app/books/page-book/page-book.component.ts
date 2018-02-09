import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';
import { Opcion } from '../../core/shared/option.model';

@Component({
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrls: ['./page-book.component.css']
})
export class PageBookComponent implements OnInit {
  books: Book[];
  opciones: Opcion[];
  orderBy: string;

  constructor(private booksService: BookService) {
    this.opciones = [    
      {text: 'Id', value: 'ID'},
      {text: 'Título', value: 'Title'},
      {text: 'Descripción', value: 'Description'},
      {text: 'N. Páginas', value: 'PageCount'},
    ];
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getBooks()
      .subscribe(books => this.books = books);
  }

  onOrderBy(order: string) {
    this.orderBy = order;
  }

}

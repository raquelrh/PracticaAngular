import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../authors/shared/author.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: Book;
  authors: Author[];

  constructor(
    private booksService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.getBook(id)
      .subscribe(book => {
        this.book = book;
        // Para la comunicación entre componentes
        this.getAuthorsBook(id);
      });
  }

  getAuthorsBook(id: number) {
    this.booksService.getAuthorsBook(id)
      .subscribe(authors => this.authors = authors);
  }


}

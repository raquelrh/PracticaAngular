import { Component, OnInit,  Input} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})

export class ListBookComponent implements OnInit {
  @Input() books: Book[];

  constructor(private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => console.error
      );
  }

  onClick(id: number): void {
    this.router.navigateByUrl(`books/${id}`);
  }

}

import { Component, OnInit,  Input, SimpleChanges, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';
import { CoreService } from '../../core/shared/core.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})

export class ListBookComponent implements OnInit/*, OnChanges*/ {
  @Input() books: Book[];
  @Input() orderBy: string;

  constructor(private bookService: BookService,
    private router: Router,
    private coreService: CoreService
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

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.orderBy && changes.orderBy.currentValue) {
  //     this.coreService.sort(this.books, changes.orderBy.currentValue);
  //   }
  // }

  onClick(id: number): void {
    this.router.navigateByUrl(`books/${id}`);
  }

}

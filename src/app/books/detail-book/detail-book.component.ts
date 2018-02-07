import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: Book;

  constructor(
    private booksService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    alert("ngOnInit");
    this.getBook();
  }

  getBook() {
    alert("getBooks");
    const id = +this.route.snapshot.paramMap.get('ID');
    this.booksService.getBook(id)
      .subscribe(book => {
        this.book = book;
        // this.getPostsUsuario(id);
      });
  }

}

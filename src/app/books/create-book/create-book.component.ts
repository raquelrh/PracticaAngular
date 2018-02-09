import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../../authors/shared/author.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  authors: Author[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private booksService: BookService,
  ) {
    this.bookForm = this.fb.group({
      Title: ['', [Validators.required]],
      PageCount: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Excerpt: ['', [Validators.required]],
      PublishDate: ['', [Validators.required]],
      AuthorsId: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.booksService.getAuthorsBook(null)
      .subscribe(authors => this.authors = authors);
  }

  onSubmit() {
    this.booksService.postBook(this.bookForm.value)
      .subscribe(book => alert(JSON.stringify(book)));
      // .subscribe(book => this.router.navigateByUrl(`books/${book.ID}`));
  }

}

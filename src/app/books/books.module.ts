import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookComponent } from './book/book.component';
import { BookService } from './shared/book.service';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { PageBookComponent } from './page-book/page-book.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [BookComponent, ListBookComponent, DetailBookComponent, PageBookComponent],
  providers: [BookService]
})
export class BooksModule { }

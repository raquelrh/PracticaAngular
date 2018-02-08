import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { PageBookComponent } from './page-book/page-book.component';
import { BookService } from './shared/book.service';
import { AuthorsModule } from '../authors/authors.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AuthorsModule
  ],
   // por defecto no xporta los componentes
  exports: [BookComponent, ListBookComponent, DetailBookComponent, PageBookComponent],
  declarations: [BookComponent, ListBookComponent, DetailBookComponent, PageBookComponent],
  providers: [BookService]
})
export class BooksModule { }

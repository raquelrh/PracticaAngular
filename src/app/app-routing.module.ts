import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './books/list-book/list-book.component';
import { DetailBookComponent } from './books/detail-book/detail-book.component';
import { AuthorComponent } from './authors/author/author.component';
import { ListAuthorComponent } from './authors/list-author/list-author.component';
import { DetailAuthorComponent } from './authors/detail-author/detail-author.component';
import { PageBookComponent } from './books/page-book/page-book.component';

const routes: Routes = [
  { path: 'books', component: PageBookComponent},
  { path: 'books/:id', component: DetailBookComponent },
  { path: 'authors', component: ListAuthorComponent},
  { path: 'authors/:id', component: DetailAuthorComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

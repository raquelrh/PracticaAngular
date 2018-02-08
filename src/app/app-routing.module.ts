import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './books/list-book/list-book.component';
import { DetailBookComponent } from './books/detail-book/detail-book.component';

const routes: Routes = [
  { path: 'books', component: ListBookComponent},
  { path: 'books/:id', component: DetailBookComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

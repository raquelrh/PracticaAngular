import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBookComponent } from './books/page-book/page-book.component';
import { DetailBookComponent } from './books/detail-book/detail-book.component';

const routes: Routes = [
  { path: 'books', component: PageBookComponent},
  { path: 'books/:id', component: DetailBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

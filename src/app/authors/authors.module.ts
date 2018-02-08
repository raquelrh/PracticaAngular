import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthorComponent } from './author/author.component';
import { AuthorService } from './shared/author.service';
import { ListAuthorComponent } from './list-author/list-author.component';
import { DetailAuthorComponent } from './detail-author/detail-author.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [AuthorComponent, ListAuthorComponent, DetailAuthorComponent],
  declarations: [AuthorComponent, ListAuthorComponent, DetailAuthorComponent],
  providers: [AuthorService]
})
export class AuthorsModule { }

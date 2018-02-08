import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthorsModule } from './authors/authors.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AuthorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

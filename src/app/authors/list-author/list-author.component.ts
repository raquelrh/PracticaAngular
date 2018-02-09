import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../shared/author.model';
import { AuthorService } from '../shared/author.service';
import { error } from 'util';


@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})

export class ListAuthorComponent implements OnInit {
  @Input() authors: Author[];

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(
        authors => this.authors = authors,
        error => console.error
      );
  }

  onClick(id: number): void {
    this.router.navigateByUrl(`authors/${id}`);
  }

}

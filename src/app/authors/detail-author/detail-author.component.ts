import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/author.model';
import { AuthorService } from '../shared/author.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-author',
  templateUrl: './detail-author.component.html',
  styleUrls: ['./detail-author.component.css']
})

export class DetailAuthorComponent implements OnInit {
  author: Author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor() {
    const id =+this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id)
      .subscribe(author => {
        this.author = author;
      });
  }

}

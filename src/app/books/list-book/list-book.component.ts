import { Component, OnInit,  Input} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})

export class ListBookComponent implements OnInit {
  @Input() books: Book[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // onClick(ID: number) {    
  //   this.router.navigateByUrl(`books/${ID}`);
  // }

}

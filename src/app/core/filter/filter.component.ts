import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Opcion } from '../shared/option.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() opciones: Opcion[];
  @Output() orden = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    this.orden.emit(event.target.value);
  }
}

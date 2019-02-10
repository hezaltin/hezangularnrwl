import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-search-preview',
  templateUrl: './document-search-preview.component.html',
  styleUrls: ['./document-search-preview.component.css']
})
export class DocumentSearchPreviewComponent implements OnInit {

  @Input() book: any;
  @Output() selectedFromCollectionPreviewList = new EventEmitter()

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.original_title ? this.book.original_title : this.book.name;
  }

  get subtitle() {

    return this.book.original_title ? this.book.original_title : this.book.name;
  }

  get description() {
    return this.book.overview;
  }

  get thumbnail(): string | boolean {
    return this.book.poster_path
  }

  constructor() { }

  ngOnInit() {
  }

}

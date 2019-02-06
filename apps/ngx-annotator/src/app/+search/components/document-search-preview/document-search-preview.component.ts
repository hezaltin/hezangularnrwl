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
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        ''
      );
    }

    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}

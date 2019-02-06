import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-search-details',
  templateUrl: './document-search-details.component.html',
  styleUrls: ['./document-search-details.component.css']
})
export class DocumentSearchDetailsComponent implements OnInit {
  @Input() book: any;

  constructor() { }

  ngOnInit() {
  }

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
  get authors() {
    return this.book.volumeInfo.authors;
  }

  get thumbnail() {
    return (
      this.book.volumeInfo.imageLinks &&
      this.book.volumeInfo.imageLinks.smallThumbnail &&
      this.book.volumeInfo.imageLinks.smallThumbnail.replace('http:', '')
    );
  }

}

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
    return this.book.original_title ? this.book.original_title : this.book.name;
  }

  get subtitle() {
    return this.book.original_title ? this.book.original_title : this.book.name;
  }

  get description() {
    return this.book.overview;
  }
 

  get thumbnail() {
    return this.book.poster_path
  }

  get votecount(){
    return this.book.vote_count
  }

}

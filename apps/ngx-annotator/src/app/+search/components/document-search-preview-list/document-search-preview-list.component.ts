import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-search-preview-list',
  templateUrl: './document-search-preview-list.component.html',
  styleUrls: ['./document-search-preview-list.component.css']
})
export class DocumentSearchPreviewListComponent implements OnInit {
  @Input() books:any
  @Input() tvseries:any
  @Input() people:any
  @Input() activeCategory:any
  @Output() selectedFromCollectionPreview= new EventEmitter()
  @Output() searchBasedOnCategory = new EventEmitter();
  constructor() { }

  ngOnInit() {

    console.log('this.books====>',this.books)
  }



}

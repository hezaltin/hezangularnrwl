import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-document-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './document-search.component.html',
  styleUrls: ['./document-search.component.css']
})
export class DocumentSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

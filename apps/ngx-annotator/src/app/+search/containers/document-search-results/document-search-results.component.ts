import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-document-search-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './document-search-results.component.html',
  styleUrls: ['./document-search-results.component.css']
})
export class DocumentSearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

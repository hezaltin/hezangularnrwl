import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-entity-search-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './entity-search-results.component.html',
  styleUrls: ['./entity-search-results.component.css']
})
export class EntitySearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

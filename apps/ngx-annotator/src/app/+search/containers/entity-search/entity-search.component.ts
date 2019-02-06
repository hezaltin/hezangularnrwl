import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-entity-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css']
})
export class EntitySearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

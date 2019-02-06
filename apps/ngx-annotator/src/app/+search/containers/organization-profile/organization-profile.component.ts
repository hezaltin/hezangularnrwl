import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-organization-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Inject } from '@angular/core'
import { Patent } from '../../../+search/models/document.model'

@Component({
  selector: 'app-patent-document',
  templateUrl: './patent-document.component.html',
  styleUrls: ['./patent-document.component.css']
})
export class PatentDocumentComponent implements OnInit {
  @Input() loading = false
  @Input() error = ''
  @Input() patent: Patent
  
  constructor() { }

  ngOnInit() { }

}

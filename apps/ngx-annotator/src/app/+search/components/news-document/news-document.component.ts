import { Component, OnInit, Input } from '@angular/core'
import { News } from '../../../+search/models/document.model'

@Component({
  selector: 'app-news-document',
  templateUrl: './news-document.component.html',
  styleUrls: ['./news-document.component.css']
})
export class NewsDocumentComponent implements OnInit {
  @Input() loading = false
  @Input() error = ''
  @Input() news: News
  
  constructor() { }

  ngOnInit() { }

}

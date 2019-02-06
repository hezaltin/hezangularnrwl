import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() visible: boolean
  @Output() close = new EventEmitter<boolean>()
  @Output() searchEmitter = new EventEmitter<any>()
  @ViewChild('input') inputElement: ElementRef;

  searchForm:FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchInput:['']
    });
    this.searchInputValueChanges.subscribe(value=>{
      console.log(value)
      this.searchEmitter.emit({searchValue:value})
    })
  }

  get searchInputControl(){
      return this.searchForm.get('searchInput');
  }

  get searchInputValueChanges(){
    return this.searchInputControl.valueChanges.pipe(debounceTime(100));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.visible && changes.visible.currentValue) {
      setTimeout(() => this.inputElement.nativeElement.focus(), 100);
    }
  }

  closeSearchBar() {
    this.close.emit(true)
  }

}

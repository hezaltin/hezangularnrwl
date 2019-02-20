import { Component, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs'

import * as fromSearch from '../../reducers'
import * as SearchActions from '../../actions/search.actions'
import { Store, select } from '@ngrx/store'
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-document-search-summary',
  templateUrl: './document-search-summary.component.html',
  styleUrls: ['./document-search-summary.component.css']
})
export class DocumentSearchSummaryComponent implements OnInit {
  documentSearch$:Observable<any>
  documentSearchbyTvSeries$:Observable<any>
  documentSearchByPeople$:Observable<any>
  bookSelect$: Observable<any>;
  activeCategory$:Observable<any>;
  removable = true;
  resultFilter:FormGroup;
  fruits:any = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  selectable = true;
  languageData = [{name:'en',id:1,selected:false},{name:'ta',id:2,selected:false}];
 regionData = [{name:'US',id:1,selected:false},{name:'UK',id:2,selected:false},{name:'IN',id:3,selected:false}];
 yearData =[{name:1995,id:1,selected:false},{name:2000,id:2,selected:false},{name:2017,id:3,selected:false}];
   setFiltersKeys = ['language','region','year'];
   isSearchValid$:Observable<any>;
  constructor( private store: Store<fromSearch.State>,private fb:FormBuilder) { 
   
  }

  ngOnInit() {
    this.resultFilter = this.createResultFIlterForm()
    this.documentSearch$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResults))
    this.documentSearchbyTvSeries$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResultsByTelevision))
    this.documentSearchByPeople$ = this.store.pipe(select(fromSearch.getSearchDocumentSearchResultsByPeople))
    this.bookSelect$ = this.store.pipe(select(fromSearch.getSearchDocumentSelectedResult)) as Observable<
    any
  >;
  this.activeCategory$ = this.store.pipe(select(fromSearch.getActiveCategoryResult))
  
  this.languageData.map(item=>{
    this.languageControl.push(this.fb.control(item.selected))
  })
  this.regionData.map(item=>{
    this.regionControl.push(this.fb.control(item.selected))
  })
  this.yearData.map(item=>{
    this.yearControl.push(this.fb.control(item.selected))
  })
  let initialFilterOptions = this.getFilterOptionsData(this.resultFilter.value);
  console.log('initialFilterOptions====>',initialFilterOptions);
  this.filterOptionEventDispatch(initialFilterOptions)
  console.log(this.resultFilter.value)

    this.resultFilter.valueChanges.subscribe(name=>{
      console.log(name)
      let getFilterOptions = this.getFilterOptionsData(name)
      console.log(getFilterOptions)
      this.filterOptionEventDispatch(getFilterOptions)
    });

    this.isSearchValid$ = this.store.pipe(select(fromSearch.getSearchInputValue));
  }

  getFilterOptionsData(options){
    console.log(options)
        let optionsLanguage = this.languageData.filter((item,index)=>{
          return options.language[index] === true
        })
        let optionsregion = this.regionData.filter((item,index)=>{
          return options.region[index] === true;
        })
        let optionsyear = this.yearData.filter((item,index)=> {
          return  options.year[index] === true;
        });

        let setMultDImension = [[...optionsLanguage],[...optionsregion],[...optionsyear]]
        console.log(setMultDImension)
        let filterOptions = this.setFiltersKeys.reduce((all,item,index)=>{
                  all[item] = setMultDImension[index];
            return all
        },{})

        return filterOptions


  }

  get languageControl(){
    return this.resultFilter? this.resultFilter.controls['language'] as FormArray :null;
  }
  
  get regionControl(){
    return this.resultFilter? this.resultFilter.get('region') as FormArray : null;
  }
  get yearControl(){
    return this.resultFilter? this.resultFilter.get('year') as FormArray :null;
  }

  createResultFIlterForm(){
    return this.fb.group({
      language:this.fb.array([]),
      region: this.fb.array([]),
      year:this.fb.array([])
  });
  }

  selectedFromCollectionPreview(selectedItem){
      console.log(selectedItem)
       this.store.dispatch(new SearchActions.LoadGetSelectedSearchItem(selectedItem));
  }
  searchBasedOnCategory(event){
    console.log('event===>',event)
    this.store.dispatch(new SearchActions.GetActiveSelectedCategory(event))
    this.store.dispatch(new SearchActions.ResetSelectedItem())
  }

  remove(): void {
    this.store.dispatch(new SearchActions.RemoveActiveCategory())
    this.store.dispatch(new SearchActions.ResetSelectedItem())
  }

  filterOptionEventDispatch(payload){
      this.store.dispatch(new SearchActions.FilterOptionHolding(payload))
  }

}

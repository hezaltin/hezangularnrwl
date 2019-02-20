import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
// import * as fromRoot from '../../../reducers'
import * as fromSearch from '../../reducers'
import * as SplitActions from '../../actions/split.actions'
import * as LayoutActions from '../../../core/actions/layout.actions'
import * as fromRoot from './../../../reducers'
import * as SearchActions from '../../actions/search.actions'

@Component({
  selector: 'app-universal-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './universal-search.component.html',
  styleUrls: ['./universal-search.component.css']
})
export class UniversalSearchComponent implements OnInit {
  sizes$: Observable<number[]>
  showSearchBar$: Observable<boolean>
  activeCategory:any;
  searchEventValue:string;
  activeFilters:any;

  constructor(private store: Store<any>) {
    this.sizes$ = store.pipe(
      select(fromSearch.getSplitFirstGutter),
      map((gutter: { drag: boolean, sizes: number[] }) => gutter.sizes)
    )
    this.showSearchBar$ = this.store.pipe(select(fromRoot.getLayoutShowSearchBar))

  }

  ngOnInit() {

    const activeCategoryObserve =  this.store.pipe(select(fromSearch.getActiveCategoryResult)).subscribe(category=>{
      this.activeCategory = category;
      if(!this.searchEventValue){

        return
      }
      if(!this.activeCategory){
        this.inActiveCategoryBasedAction(this.searchEventValue,this.activeFilters)
        return 
     }
     this.activeCategoryBasedAction(this.activeCategory.name,this.searchEventValue,this.activeFilters);
    
    });

    const activeFiltersWithCategoryObservable = this.store.pipe(select(fromSearch.getActiveFiltersLayer)).subscribe(filterLayer=>{
      console.log('filterLayer===>',filterLayer)
      if(!filterLayer){
        return 
      }
      this.activeFilters = filterLayer
      if(!this.searchEventValue){
        return
      }
      if(!this.activeCategory){
        this.inActiveCategoryBasedAction(this.searchEventValue,this.activeFilters)
        return 
     }
     this.activeCategoryBasedAction(this.activeCategory.name,this.searchEventValue,this.activeFilters);
    })
  }

  splitDragStart(event) {
    this.store.dispatch(new SplitActions.DragStart(event))
  }

  splitDragEnd(event) {
    this.store.dispatch(new SplitActions.DragEnd(event))
  }

  closeSearchBar() {
    this.store.dispatch(new LayoutActions.CloseSearchBar())
  }

  openSearchBar() {
    this.store.dispatch(new LayoutActions.OpenSearchBar())
  }

  notImplementedAlert() {
    alert('Sorry! This feature is not yet available')
  }

  searchEmitterValue(event){
    this.searchEventValue =  event.searchValue;
   this.store.dispatch(new SearchActions.ResetSelectedItem())
   this.store.dispatch(new SearchActions.SearchValueChangesAction(event.searchValue))
   if(!this.activeCategory){
      this.inActiveCategoryBasedAction(this.searchEventValue,this.activeFilters)
    return 
   }
   this.activeCategoryBasedAction(this.activeCategory.name,this.searchEventValue,this.activeFilters);

  }

  inActiveCategoryBasedAction(searchValue,filterValue){
    this.store.dispatch(new SearchActions.LoadSearch({searchvalue:searchValue,isActive:false,filterValue:filterValue}))
    this.store.dispatch(new SearchActions.LoadSearchByTelivisionSeries({searchvalue:searchValue,isActive:false,filterValue:filterValue}))
    this.store.dispatch(new SearchActions.LoadSearchByPeople({searchvalue:searchValue,isActive:false,filterValue:filterValue}))
  }

  activeCategoryBasedAction(name,searchValue,filterValue){
      let initiateAction = {
        'movies' : () =>{
            return this.store.dispatch(new SearchActions.LoadSearch({searchvalue:searchValue,isActive:true,filterValue:filterValue}))
        },
        'televisionseries' :() =>{
            return this.store.dispatch(new SearchActions.LoadSearchByTelivisionSeries({searchvalue:searchValue,isActive:true,filterValue:filterValue}))
        },
        'people' : () =>{
          return  this.store.dispatch(new SearchActions.LoadSearchByPeople({searchvalue:searchValue,isActive:true,filterValue:filterValue}))
        }
      }
      return (initiateAction[name]) ();
  }
}

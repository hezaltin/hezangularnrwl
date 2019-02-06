import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects' 
import { AngularSplitModule } from 'angular-split'
import { reducers } from './reducers'
import { SearchEffects } from './effects/search.effects'
import { DocumentEffects } from './effects/document.effects'
import { SearchRoutingModule } from './search-routing.module'
import { UniversalSearchComponent } from './containers/universal-search/universal-search.component'
import { EntitySearchComponent } from './containers/entity-search/entity-search.component'
import { DocumentSearchComponent } from './containers/document-search/document-search.component'
import { SearchMetadataComponent } from './containers/search-metadata/search-metadata.component'
import { PersonProfileComponent } from './containers/person-profile/person-profile.component'
import { OrganizationProfileComponent } from './containers/organization-profile/organization-profile.component'
import { PlaceProfileComponent } from './containers/place-profile/place-profile.component'
import { DocumentSearchResultsComponent } from './containers/document-search-results/document-search-results.component'
import { DocumentSearchSummaryComponent } from './containers/document-search-summary/document-search-summary.component'
import { EntitySearchSummaryComponent } from './containers/entity-search-summary/entity-search-summary.component';
import { DocumentViewComponent } from './containers/document-view/document-view.component';
import { EntitySearchResultsComponent } from './containers/entity-search-results/entity-search-results.component'
import { PatentDocumentComponent } from './components/patent-document/patent-document.component'
import { NewsDocumentComponent } from './components/news-document/news-document.component'
import { SafeUrlPipe } from '../shared/pipes/safe-url.pipe'
import { EllipsisPipe } from '../shared/pipes/ellipsis.pipe'
import { AddcommasPipe } from '../shared/pipes/addcommas.pipe'
import { IframeContainerComponent } from './components/iframe-container/iframe-container.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { MaterialModule } from '../material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentSearchPreviewListComponent } from './components/document-search-preview-list/document-search-preview-list.component';
import { DocumentSearchPreviewComponent } from './components/document-search-preview/document-search-preview.component';
import { DocumentSearchDetailsComponent } from './components/document-search-details/document-search-details.component';

@NgModule({
  declarations: [
    UniversalSearchComponent, 
    EntitySearchComponent, 
    DocumentSearchComponent, 
    SearchMetadataComponent, 
    PersonProfileComponent, 
    OrganizationProfileComponent, 
    PlaceProfileComponent, 
    PatentDocumentComponent, 
    NewsDocumentComponent, 
    DocumentSearchResultsComponent, 
    DocumentSearchSummaryComponent, 
    EntitySearchSummaryComponent, 
    DocumentViewComponent, 
    EntitySearchResultsComponent,
    SafeUrlPipe,
    EllipsisPipe,
    AddcommasPipe,
    IframeContainerComponent,
    SearchBarComponent,
    DocumentSearchPreviewListComponent,
    DocumentSearchPreviewComponent,
    DocumentSearchDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('search', reducers),
    // StoreModule.forFeature('layout', reducers),
    EffectsModule.forFeature([SearchEffects, DocumentEffects]),
    AngularSplitModule,
    SearchRoutingModule,
    
  ],
  providers: [
    { provide: 'iFrameResize', useValue: window['iFrameResize']}
  ]
})
export class SearchModule { }

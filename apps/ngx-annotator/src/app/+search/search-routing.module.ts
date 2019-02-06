import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UniversalSearchComponent } from './containers/universal-search/universal-search.component'
import { EntitySearchComponent } from './containers/entity-search/entity-search.component'
import { DocumentSearchComponent } from './containers/document-search/document-search.component'
import { SearchMetadataComponent } from './containers/search-metadata/search-metadata.component'
import { PersonProfileComponent } from './containers/person-profile/person-profile.component'
import { OrganizationProfileComponent } from './containers/organization-profile/organization-profile.component'
import { PlaceProfileComponent } from './containers/place-profile/place-profile.component'
import { DocumentSearchResultsComponent } from './containers/document-search-results/document-search-results.component'
import { EntitySearchSummaryComponent } from './containers/entity-search-summary/entity-search-summary.component'
import { DocumentSearchSummaryComponent } from './containers/document-search-summary/document-search-summary.component'
import { DocumentViewComponent } from './containers/document-view/document-view.component'
import { EntitySearchResultsComponent } from './containers/entity-search-results/entity-search-results.component';

export const routes: Routes = [
  { path: '', redirectTo: 'u', pathMatch: 'full' },
  { path: 'u', component: UniversalSearchComponent, children: [
    { path: '', component: SearchMetadataComponent },
    { path: '', outlet: 'entity', component: EntitySearchComponent, children: [
      { path: '', component: EntitySearchSummaryComponent },
      { path: 'results', component: EntitySearchResultsComponent },
      { path: 'person', component: PersonProfileComponent },
      { path: 'organization', component: OrganizationProfileComponent },
      { path: 'place', component: PlaceProfileComponent },
      { path: '**', redirectTo: '' },
    ]},
    { path: '', outlet: 'document', component: DocumentSearchComponent, children: [
      { path: '', component: DocumentSearchSummaryComponent },
      { path: 'results', component: DocumentSearchResultsComponent },
      { path: ':type/:id', component: DocumentViewComponent },
      { path: '**', redirectTo: '' },
    ]},
  ]},
  { path: '**', redirectTo: 'u' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}

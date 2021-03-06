import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './auth/services/auth-guard.service'
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component'

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: './+search/search.module#SearchModule',
    // canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

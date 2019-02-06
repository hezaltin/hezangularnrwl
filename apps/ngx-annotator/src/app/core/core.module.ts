import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material/material.module'
import { AppComponent } from './containers/app/app.component'
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component'
import { LayoutComponent } from './components/layout/layout.component'
import { NavItemComponent } from './components/nav-item/nav-item.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: COMPONENTS
})
export class CoreModule { }

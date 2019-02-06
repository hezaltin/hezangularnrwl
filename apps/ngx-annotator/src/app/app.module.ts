import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularSplitModule } from 'angular-split'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { DBModule } from '@ngrx/db'
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { CoreModule } from './core/core.module'
import { AuthModule } from './auth/auth.module'

import { reducers, metaReducers } from './reducers'
import { schema } from './db'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './../app/core/containers/app/app.component';
import { NxModule } from '@nrwl/nx';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { AddcommasPipe } from './shared/pipes/addcommas.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    AngularSplitModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Knowledge Graph DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema),
    NxModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { LoginPageComponent } from './containers/login-page/login-page.component'
import { LoginFormComponent } from './components/login-form/login-form.component'

import { AuthEffects } from './effects/auth.effects'
import { reducers } from './reducers'
import { MaterialModule } from '../material/material.module'
import { AuthRoutingModule } from './auth-routing.module'

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
})
export class AuthModule {}

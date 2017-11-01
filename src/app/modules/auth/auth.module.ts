import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { FIREBASE_CONFIG } from './config/firebase-config';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
  ],
  declarations: []
})
export class AuthModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CouponRegistrationComponent } from './coupon-registration/coupon-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

  const appRoutes: Routes = [
  // { path : 'app', component:AppComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'CouponRegistration', component : CouponRegistrationComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CouponRegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

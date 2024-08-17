import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipes/age.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddressPipe } from './pipes/address.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { AddressComponent } from './address/address.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'company', pathMatch: 'full' },
      { path: 'company', component: CompanyComponent },
      { path: 'address', component: AddressComponent },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: 'feedback', outlet: 'feeds', component: FeedbackComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OddComponent,
    EvenComponent,
    ChildComponent,
    AgePipe,
    AddressPipe,
    NavbarComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    LocationComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

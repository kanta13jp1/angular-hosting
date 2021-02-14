import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupListComponent } from './group-list/group-list.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { SandBoxComponent } from './sand-box/sand-box.component';
import { OrganizeListComponent } from './organize-list/organize-list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ChuoKeibaComponent } from './chuo-keiba/chuo-keiba.component';
import { HomeComponent } from './pages/home/home.component';
import { Angular2PromiseButtonModule } from 'angular2-promise-buttons';
import { MatSliderModule } from '@angular/material/slider';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    Angular2PromiseButtonModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    ),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [AdService],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    CandidateListComponent,
    GroupListComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    SandBoxComponent,
    OrganizeListComponent,
    MemberListComponent,
    ChuoKeibaComponent,
    HomeComponent,
    AddressFormComponent,
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      // Use a custom replacer to display function names in the route configs
      // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

      // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}

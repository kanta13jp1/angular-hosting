import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire/compat'; // 追加
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // 追加
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
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { TableComponent } from './table/table.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { JiminComponent } from './jimin/jimin.component';
import { LocalCandidateComponent } from './local-candidate/local-candidate.component'; // 追加
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加,
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
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
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    SharedModule, // 追加
  ],
  providers: [AdService],
  declarations: [
    AppComponent,
    JiminComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    LocalCandidateComponent,
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
    NavigationComponent,
    TableComponent,
    MatDashboardComponent,
    TreeComponent,
    DragDropComponent,
    ChatComponent,
    HeaderComponent,
    JiminComponent,
    LocalCandidateComponent,
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

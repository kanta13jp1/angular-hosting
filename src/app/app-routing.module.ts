import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { GroupListComponent } from './group-list/group-list.component';
import { SandBoxComponent } from './sand-box/sand-box.component';
import { OrganizeListComponent } from './organize-list/organize-list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ChuoKeibaComponent } from './chuo-keiba/chuo-keiba.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ChatComponent } from './chat/chat.component';
import { LocalCandidateComponent } from './local-candidate/local-candidate.component';
import { JiminComponent } from './jimin/jimin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/local-candidate', pathMatch: 'full' },
  { path: 'jimin', component: JiminComponent, data: { animation: 'heroes' } },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'heroes' } },
  { path: 'detail/:id', component: HeroDetailComponent, data: { animation: 'hero' } },
  { path: 'heroes', component: HeroesComponent, data: { animation: 'heroes' } },
  { path: 'local-candidate', component: LocalCandidateComponent, data: { animation: 'heroes' } },
  { path: 'candidate-list', component: CandidateListComponent, data: { animation: 'heroes' } },
  { path: 'hero-list', component: HeroListComponent, data: { animation: 'heroes' } },
  { path: 'crisis-list', component: CrisisListComponent, data: { animation: 'heroes' }  },
  { path: 'organize-list', component: OrganizeListComponent, data: { animation: 'heroes' }  },
  { path: 'member-list', component: MemberListComponent, data: { animation: 'heroes' }  },
  { path: 'group-list', component: GroupListComponent, data: { animation: 'heroes' }  },
  { path: 'sand-box', component: SandBoxComponent, data: { animation: 'heroes' }  },
  { path: 'chuo-keiba', component: ChuoKeibaComponent, data: { animation: 'heroes' }  },
  { path: 'home', component: HomeComponent, data: { animation: 'heroes' }  },
  { path: 'address-form', component: AddressFormComponent, data: { animation: 'heroes' }  },
  { path: 'navigation', component: NavigationComponent, data: { animation: 'heroes' }  },
  { path: 'table', component: TableComponent, data: { animation: 'heroes' }  },
  { path: 'mat-dashboard', component: MatDashboardComponent, data: { animation: 'heroes' }  },
  { path: 'tree', component: TreeComponent, data: { animation: 'heroes' }  },
  { path: 'drag-drop', component: DragDropComponent, data: { animation: 'heroes' }  },
  { path: 'chat', component: ChatComponent, data: { animation: 'heroes' }  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }
    ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

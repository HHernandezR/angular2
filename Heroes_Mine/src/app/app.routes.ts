import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {PerfilComponent} from './components/perfil/perfil.component';

import {AuthGuardService} from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'heroe/:id', component: HeroeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'heroes', component: HeroesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'perfil', component: PerfilComponent,
    canActivate:[AuthGuardService]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

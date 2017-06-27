import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';

import {HeroesService} from './services/heroes.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

import {APP_ROUTING} from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SinimagenPipe } from './pipes/sinimagen.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SearchPipe } from './pipes/search.pipe';

import {NgxPaginationModule} from 'ngx-pagination';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent,
    SinimagenPipe,
    DomseguroPipe,
    SearchPipe,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    HeroesService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

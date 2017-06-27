import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService:AuthService
  ) { }

  ngOnInit() {
    this._authService.handleAuthentication()
  }

  login(){
    this._authService.login();
  }

  logout(){
    this._authService.logout();
  }

}

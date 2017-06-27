import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  public profile:any;

  constructor(
    private _authService:AuthService
  ) { }

  ngOnInit() {
    if(this._authService.userProfile){
      this.profile =this._authService.userProfile;
    }else{
      this._authService.getProfile((error, profile) => {
        this.profile = profile
      })
    }
  }

}

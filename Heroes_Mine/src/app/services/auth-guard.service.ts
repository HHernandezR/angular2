import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private _authService:AuthService
  ) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this._authService.isAuthenticated()){
      return true;
    }else{
      console.error("-- Usuario Bloqueado, para ver el contenido se requiere autenticación --")
      return false;
    }
  }

}

import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, CanLoad} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanLoad, CanActivate{

  constructor(private authService: AuthService) {
  }

  canLoad(): Observable<boolean> {
    return this.authService.checkPermissions();
  }

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }
}
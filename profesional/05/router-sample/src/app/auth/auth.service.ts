import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable()
export class AuthService {
  user = { isAdmin: false };
  checkPermissions(): Observable<boolean> {
    return of(this.user.isAdmin);
  }
  isLoggedIn(): Observable<boolean>{
    return of(true);
  }
}

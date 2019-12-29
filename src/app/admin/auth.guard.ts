import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../model/auth.service';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean
    | UrlTree> | boolean | UrlTree {

    if (!this.authService.authenticated) {
      this.router.navigateByUrl('/admin/auth');
      return false;
    } else {
      return true;
    }

    return undefined;
  }
}

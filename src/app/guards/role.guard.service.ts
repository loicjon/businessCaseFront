import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = window.sessionStorage.getItem('auth-token');
    // decode the token to get its payload
    // @ts-ignore
    const tokenPayload = decode(token);

    if (
      this.auth.isAuthenticated() && tokenPayload['roles'].includes('ROLE_SUPERADMIN')
    ) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }
}

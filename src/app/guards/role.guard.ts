import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(): boolean {
    const user = sessionStorage.getItem('token');
    console.log('user', user);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.rol === 'JURADO') {
        return true;
      }
    }

    this.router.navigate(['/unauthorized']); // redirige si no tiene acceso
    return false;
  }
  
}

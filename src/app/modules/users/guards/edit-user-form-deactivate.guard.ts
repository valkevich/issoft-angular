import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserShellComponent } from '../containers/edit-user-shell/edit-user-shell.component';

@Injectable({
  providedIn: 'root'
})
export class EditUserFormDeactivateGuard implements CanDeactivate<EditUserShellComponent> {
  canDeactivate(
    component: EditUserShellComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.hasUnsavedData() || component.canDeactivate();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, take } from 'rxjs';
import { UserService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService, private router: Router) { }

  private routeSubscription: Subscription;
  public route: string;

  ngOnInit(): void {
    this.routeSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => this.route = event.urlAfterRedirects)
  }
  public getCurrentUser(): string {
    const user = this.userService.getCurrentUser();
    return user ? user.name : '';
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}

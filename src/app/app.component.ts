import { Component, OnInit } from '@angular/core';
import { DATABASE } from './core/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'issoft-angular';

  ngOnInit(): void {
    DATABASE.getItem('users') === null ? localStorage.setItem('users', JSON.stringify([])) : true;
    DATABASE.getItem('currentUser') === null ? localStorage.setItem('currentUser', JSON.stringify('')) : true;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {
  public loginGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginGroup = new FormGroup({});
  }

}

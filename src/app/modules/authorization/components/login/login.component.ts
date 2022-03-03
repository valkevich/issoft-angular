import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  constructor() { }

  public loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    passGroup: new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
    })
  })

  ngOnInit(): void {
  }



}

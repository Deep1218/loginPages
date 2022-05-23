import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrls: ['./login-one.component.css'],
})
export class LoginOneComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '([a-zA-Z\\.\\-_]+)?[a-zA-Z]+@[a-z-_]+(\\.[a-z]+){1,}'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,64})'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}
  onSubmitLogin() {
    console.log(this.loginForm);
  }
}

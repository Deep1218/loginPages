import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '([a-zA-Z\\.\\-_]+)?[a-zA-Z]+@[a-z-_]+(\\.[a-z]+){1,}'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmitSend() {
    console.log(this.forgotForm);
  }
}

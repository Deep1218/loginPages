import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, DoCheck {
  forgotForm!: FormGroup;

  emailTooltipPosition: string = '';
  emailTooltipMessage: string = '';

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
  ngDoCheck(): void {
    //Email ToolTip
    if (this.forgotForm.get('email')?.touched) {
      if (this.forgotForm.get('email')?.valid) {
        this.emailTooltipPosition = '';
        this.emailTooltipMessage = '';
      } else {
        //1st Message
        this.emailTooltipPosition = 'right';
        this.emailTooltipMessage = 'Email is required.';

        if (this.forgotForm.get('email')?.dirty) {
          //2nd Message
          this.emailTooltipMessage = 'Not a valid email.';
        }
      }
    }
  }

  onSubmitSend() {
    console.log(this.forgotForm);
  }
}

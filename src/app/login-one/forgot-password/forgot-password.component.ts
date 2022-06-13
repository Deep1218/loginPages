import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, response, User } from 'src/app/shared/auth.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, DoCheck {
  forgotForm!: FormGroup;

  emailTooltipPosition: string = '';
  emailTooltipMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.forgotForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
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
    console.log(this.forgotForm.value);
    const userData: User = {
      email: this.forgotForm.value['email'],
    };
    // console.log(userData);
    this.authService
      .forgotPassword(userData)
      .subscribe((response: response) => {
        try {
          if (response.status == 'Success') {
            this.toastService.show(response.message, {
              classname: 'bg-success text-light',
              delay: 5000,
            });
            this.forgotForm.reset();
          } else {
            this.toastService.show(response.message, {
              classname: 'bg-danger text-light',
              delay: 5000,
            });
          }
        } catch (error) {
          console.log('Error in logInUser()', error);
        }
      });
  }
}

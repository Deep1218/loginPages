import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../shared/auth.service';
import { ToastService } from '../shared/toast.service';
@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrls: ['./login-one.component.css'],
})
export class LoginOneComponent implements OnInit, DoCheck, OnDestroy {
  loginForm: FormGroup;

  emailTooltipPosition: string = '';
  emailTooltipMessage: string = '';

  passwordTooltipPosition: string = '';
  passwordTooltipMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
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

  ngOnInit(): void {
    this.authService.error.subscribe((error) => {
      if (error != '') {
        this.toastService.show(error, {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
        this.authService.error.next('');
      }
    });
  }

  ngDoCheck(): void {
    //Email ToolTip
    if (this.loginForm.get('email')?.touched) {
      if (this.loginForm.get('email')?.valid) {
        this.emailTooltipPosition = '';
        this.emailTooltipMessage = '';
      } else {
        //1st Message
        this.emailTooltipPosition = 'right';
        this.emailTooltipMessage = 'Email is required.';

        if (this.loginForm.get('email')?.dirty) {
          //2nd Message
          this.emailTooltipMessage = 'Not a valid email.';
        }
      }
    }
    //Password ToolTip
    if (this.loginForm.get('password')?.touched) {
      if (this.loginForm.get('password')?.valid) {
        this.passwordTooltipPosition = '';
        this.passwordTooltipMessage = '';
      } else {
        //1st Message
        this.passwordTooltipPosition = 'right';
        this.passwordTooltipMessage = 'Password is required.';

        if (this.loginForm.get('password')?.dirty) {
          //2nd Message
          this.passwordTooltipMessage = 'Not a valid password.';
        }
      }
    }
  }
  onSubmitLogin() {
    // console.log(this.loginForm.value);
    const userData: User = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
    };
    // console.log(userData);
    this.authService.logiInUser(userData);
  }
  ngOnDestroy(): void {
    this.authService.clearError();
  }
}

import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../providers/custom-validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit, DoCheck {
  newAccount!: FormGroup;

  fullNameTooltipPosition: string = '';
  fullNameTooltipMessage: string = '';

  phoneNumberTooltipPosition: string = '';
  phoneNumberTooltipMessage: string = '';

  emailTooltipPosition: string = '';
  emailTooltipMessage: string = '';

  passwordTooltipPosition: string = '';
  passwordTooltipMessage: string = '';

  confirmPasswordTooltipPosition: string = '';
  confirmPasswordTooltipMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.newAccount = this.fb.group(
      {
        fullName: [
          '',
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.pattern('^[a-z A-Z]+$'),
          ],
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(13),
            Validators.pattern(
              '([+((0-9)]{1})(([(0-9)+() -.]){5,16})([+((0-9)]{1})'
            ),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '([a-zA-Z\\.\\-_]+)?[a-zA-Z]+@[a-z-_]+(\\.[a-z]+){1,}'
            ),
          ],
        ],
        //- at least 8 characters
        // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
        // - Can contain special characters
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,64})'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: CustomValidators.mustMatch('password', 'confirmPassword') }
    );
  }

  ngOnInit(): void {}
  ngDoCheck(): void {
    //Full Name ToolTip
    if (this.newAccount.get('fullName')?.touched) {
      if (this.newAccount.get('fullName')?.valid) {
        this.fullNameTooltipPosition = '';
        this.fullNameTooltipMessage = '';
      } else {
        //1st Message
        this.fullNameTooltipPosition = 'top';
        this.fullNameTooltipMessage = 'Full Name is required.';

        if (this.newAccount.get('fullName')?.dirty) {
          //2nd Message
          this.fullNameTooltipMessage =
            'Use only alphabets and lenght should be less the 30.';
        }
      }
    }
    //Phone Number ToolTip
    if (this.newAccount.get('phoneNumber')?.touched) {
      if (this.newAccount.get('phoneNumber')?.valid) {
        this.phoneNumberTooltipPosition = '';
        this.phoneNumberTooltipMessage = '';
      } else {
        //1st Message
        this.phoneNumberTooltipPosition = 'top';
        this.phoneNumberTooltipMessage = 'Phone number is required.';

        if (this.newAccount.get('phoneNumber')?.dirty) {
          //2nd Message
          this.phoneNumberTooltipMessage =
            'Use only numeric values and lenght must be between 10-13.';
        }
      }
    }
    //Email ToolTip
    if (this.newAccount.get('email')?.touched) {
      if (this.newAccount.get('email')?.valid) {
        this.emailTooltipPosition = '';
        this.emailTooltipMessage = '';
      } else {
        //1st Message
        this.emailTooltipPosition = 'right';
        this.emailTooltipMessage = 'Email is required.';

        if (this.newAccount.get('email')?.dirty) {
          //2nd Message
          this.emailTooltipMessage = 'Not a valid email.';
        }
      }
    }
    //Password ToolTip
    if (this.newAccount.get('password')?.touched) {
      if (this.newAccount.get('password')?.valid) {
        this.passwordTooltipPosition = '';
        this.passwordTooltipMessage = '';
      } else {
        //1st Message
        this.passwordTooltipPosition = 'bottom';
        this.passwordTooltipMessage = 'Password is required.';

        if (this.newAccount.get('password')?.dirty) {
          //2nd Message
          this.passwordTooltipMessage =
            'Ensure that password is 8 to 64 characters long and contains a mix of upper and lower case characters, one numeric and one special character.';
        }
      }
    }
    //Confirm Password ToolTip
    if (this.newAccount.get('confirmPassword')?.touched) {
      if (this.newAccount.get('confirmPassword')?.valid) {
        this.confirmPasswordTooltipPosition = '';
        this.confirmPasswordTooltipMessage = '';
      } else {
        //1st Message
        this.confirmPasswordTooltipPosition = 'bottom';
        this.confirmPasswordTooltipMessage = 'Confirm Password is required.';

        if (this.newAccount.get('confirmPassword')?.dirty) {
          //2nd Message
          this.confirmPasswordTooltipMessage =
            'Passowrd and Confirm Password does not match.';
        }
      }
    }
  }

  onSubmit() {
    console.log(this.newAccount);
  }
}

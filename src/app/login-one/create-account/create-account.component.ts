import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../providers/custom-validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  newAccount!: FormGroup;

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

  onSubmit() {
    console.log(this.newAccount.get('confirmPassword'));
  }
}

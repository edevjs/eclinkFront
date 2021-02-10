import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  public formSubmitted = false;

  public registerForm = this.formBuilder.group({
    name: ['', Validators.required ],
    email: ['', [Validators.required, Validators.email] ],
    password: ['', Validators.required ],
    password2: ['', Validators.required ],
    terms: [true, Validators.required ],
  }, {
    validators: this.validatePasswordsForm('password', 'password2')
  });


  ngOnInit() {
  }

  createUser() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    
    if ( this.registerForm.invalid ){
      return;
    } 

    this.userService.createUser( this.registerForm.value ).subscribe(data => {
      this.router.navigate(['/']);
    },
    (error) => {
      Swal.fire('Error', error.error.msg, 'error')
    });


  }

  validateField( field: string ): boolean {
   return  this.registerForm.get(field).invalid && this.formSubmitted ? true : false;
  }

  acceptTerms() {
    return !this.registerForm.get('terms').value && this.formSubmitted;
  }

  validatePasswords() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value

    if ( (pass1 === pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  validatePasswordsForm(pass1, pass2) {

    return ( formGroup: FormGroup ) => {
      const pass1Form = formGroup.get('password');
      const pass2Form = formGroup.get('password2')

      if ( pass1Form.value === pass2Form.value ) {
        pass2Form.setErrors(null);
      } else {
        pass2Form.setErrors({ notEqual: true });
      }
    };

  }

}

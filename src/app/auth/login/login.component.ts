import { UserService } from './../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public auth2: any;

  public loginForm = this.formBuilder.group({
    email: [ localStorage.getItem('email') || '' , [Validators.required, Validators.email] ],
    password: ['', Validators.required ],
    remember: [ localStorage.getItem('remember') || false ]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.renderButton();
  }

  login() {
    // console.log(this.loginForm.value)
    // this.router.navigateByUrl('/');
    this.userService.loginUser(this.loginForm.value).subscribe(data=>{
      if ( this.loginForm.get('remember').value ){
        localStorage.setItem('email', this.loginForm.get('email').value);
        localStorage.setItem('remember', this.loginForm.get('remember').value);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('remember');
      }

      this.router.navigate(['/']);

    },
    (error) => {
      Swal.fire('Error', error.error.msg, 'error')
    });
  }


  renderButton() {

    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '817788245564-4opoapjokjk7n5arlb4u5bilamt7nqh9.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          const id_token = googleUser.getAuthResponse().id_token;
          this.userService.loginGoogle(id_token).subscribe( resp => {
            // this.router.navigate(['/']);
            this.zone.run(() => {
              this.router.navigate(['/']);
          });
          });
          
        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

}

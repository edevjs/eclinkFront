import { User } from './../../models/user.model';
import { LinksService } from './../../services/links.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {

  textoCopiado = '';
  user: User;
  txtUser = '';

  public fastLinkForm = this.formBuilder.group({
    url: ['' ],
    title: [''],
  });


  constructor(
    private formBuilder: FormBuilder,
    private linksService: LinksService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    // (navigator as Navigator).clipboard.readText().then(texto => {
    //     if( texto && (texto.startsWith('http://') || texto.startsWith('https://'))){
    //       this.textoCopiado = texto;
    //       this.fastLinkForm.controls['url'].setValue(this.textoCopiado);
    //     }
    //   })
    //   .catch(error => {
    //     // Por si el usuario no da permiso u ocurre un error
    //     console.log("Hubo un error: ", error);
    //   });

    this.userService.getUser().subscribe(data => {
      this.user = data.user;
      console.log(`user :: ${JSON.stringify(this.user)}`);
      this.txtUser = this.user.name.substr(0, 1).toUpperCase();
    });

  }

  saveFastLink() {
    console.log(this.fastLinkForm.value);
    this.linksService.saveLinks(this.fastLinkForm.value).subscribe( links => {
      console.log(links);
    });
  }


  logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}

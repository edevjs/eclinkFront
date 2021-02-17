import { LinksService } from './../../services/links.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {

  private textoCopiado: string = '';

  public fastLinkForm = this.formBuilder.group({
    url: ['' ],
    title: [''],
  });


  constructor(
    private formBuilder: FormBuilder,
    private linksService: LinksService
  ) { }

  ngOnInit() {

    navigator.clipboard.readText().then(texto => {
        if( texto && (texto.startsWith('http://') || texto.startsWith('https://'))){
          this.textoCopiado = texto;
          this.fastLinkForm.controls['url'].setValue(this.textoCopiado);
        }
      })
      .catch(error => {
        // Por si el usuario no da permiso u ocurre un error
        console.log("Hubo un error: ", error);
      });

  }


  saveFastLink() {
    console.log(this.fastLinkForm.value);
    this.linksService.saveLinks(this.fastLinkForm.value).subscribe( links => {
      console.log(links);
    });
  }

}

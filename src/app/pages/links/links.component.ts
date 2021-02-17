import { AppService } from './../../services/app.service';
import { LinksService } from './../../services/links.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.sass']
})
export class LinksComponent implements OnInit {

  links;

  constructor(
    private linksService: LinksService,
    public appService: AppService
  ) {

   

  }

  ngOnInit() {
    this.linksService.getAllLinks().subscribe( links => {
      this.links = links;
    });
  }

}

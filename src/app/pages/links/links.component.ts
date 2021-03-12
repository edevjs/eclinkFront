import { CommonUtils } from 'src/app/shared/utils/common.utils';
import { AppService } from './../../services/app.service';
import { LinksService } from './../../services/links.service';

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.sass']
})
export class LinksComponent implements OnInit {

  links;
  linkEdit;

  constructor(
    private linksService: LinksService,
    public appService: AppService,
    private sanitizer: DomSanitizer
  ) {


  }

  ngOnInit() {
    this.linksService.getAllLinks().subscribe( links => {
      this.links = links;
    });
  }

  changeLinks() {
    this.linksService.getAllLinks().subscribe( links => {
      this.links = links;
    });
  }

}

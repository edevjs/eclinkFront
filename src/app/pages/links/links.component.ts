import { LinksService } from './../../services/links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.sass']
})
export class LinksComponent implements OnInit {

  constructor(
    private linksService: LinksService,
  ) { }

  ngOnInit() {
    this.linksService.getLinks();
  }

}

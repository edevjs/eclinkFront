import { Component, OnInit } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit() {
    
  }

  search(text) {
    this.linksService.search(text);
  }

}

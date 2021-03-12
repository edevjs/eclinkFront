import { CommonUtils } from 'src/app/shared/utils/common.utils';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-viewlinks',
  templateUrl: './viewlinks.component.html',
  styleUrls: ['./viewlinks.component.sass']
})
export class ViewlinksComponent implements OnChanges {

  @Input() links;
  backupLinks;

  constructor(
    private linksService: LinksService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.backupLinks = {...this.links};
    this.linksService.textSearchEmitter.subscribe(text => {
      if (!text) {
        this.clear();
      } else {
        this.links.links = this.backupLinks.links.filter( link => {
          return (link.title && link.title.toUpperCase().includes(text.toUpperCase()))
          || (link.url && link.url.toUpperCase().includes(text.toUpperCase()));
        });
      }
    })
  }

  getTextColor(color: string) {
    const brightness = color ? CommonUtils.brightnessByColor(color) : 255;
    return brightness > 125 ? '#000' : '#fff';
  }

  editLink (link) {
    this.linksService.editLink(link);
  }

  clear() {
    this.links = {...this.backupLinks};
  }


}

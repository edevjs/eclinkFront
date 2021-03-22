import { CommonUtils } from 'src/app/shared/utils/common.utils';
import { AppService } from './../../services/app.service';
import { LinksService } from './../../services/links.service';

import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.sass']
})
export class LinksComponent implements OnInit {

  links;
  linkEdit;
  sections;
  linksBackup;
  categories = [];
  allLinks;

  numItemsMenu = 8;

  constructor(
    private linksService: LinksService,
    public appService: AppService,
    private sectionsService: SectionService
  ) {


  }

  ngOnInit() {
    this.linksService.getAllLinks().subscribe( links => {
      this.links = links;
      this.linksBackup = {...this.links};
      this.allLinks = this.linksBackup.links.length;
      this.getCategoriesFromLinks();
      this.resizeElements();
    });

    // this.sectionsService.getAllSections().subscribe( sections => {
    //   this.sections = sections.sections;
    // });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeElements();
  }

  resizeElements() {
    const width = window.innerWidth;
    if (width > 1500) {
      this.numItemsMenu = 8;
    } else if (width < 1500 && width > 1024){
      this.numItemsMenu = 6;
    } else if (width < 1024 && width > 750) {
      this.numItemsMenu = 4;
    } else if (width < 750 && width > 550) {
      this.numItemsMenu = 2;
    } else if (width < 550) {
      this.numItemsMenu = 0;
    }
  }
  changeLinks() {
    this.linksService.getAllLinks().subscribe( links => {
      this.links = links;
    });
  }

  selectTab(id) {
    if (id) {
      this.links.links = this.linksBackup.links.filter( link => {
        if (id === -100) {
          return link.sections.length <= 0;
        } else {
          return link.sections.some(section => {
            return section._id === id;
          });
        }
      });
    } else {
      this.links = {...this.linksBackup};
    }
  }


  getCategoriesFromLinks() {
    const categories = [];
    this.linksBackup.links.forEach(link => {

      if (link.sections && link.sections.length > 0) {

        link.sections.forEach(section => {
          const cat = categories.find(data => {
            return data.id === section._id;
          });
          if (cat) {
            cat.count++;
          } else {
            const category = {
              id: section._id,
              color: section.color,
              name: section.name,
              count: 1
            };
            categories.push(category);
          }
        });

      } else {

        const cat = categories.find(data => {
          return data.id === -100;
        });
        if (cat) {
          cat.count++;
        } else {
          const category = {
            id: -100,
            color: '',
            name: 'Uncategorized',
            count: 1
          };
          categories.push(category);
        }

      }

    });

    categories.sort((a, b) => {
      return (a.count > b.count) ? -1 : (a.count < b.count) ? 1 : 0;
    });

    this.categories = categories;
  }

}

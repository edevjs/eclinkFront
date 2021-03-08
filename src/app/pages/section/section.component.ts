import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { CommonUtils } from 'src/app/shared/utils/common.utils';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {


  sections;
  sectionEdit;

  constructor(
    private sectionsService: SectionService,
  ) { }

  ngOnInit() {
    this.getAllSections();
  }

  getTextColor(color: string) {
    const brightness = color ? CommonUtils.brightnessByColor(color) : 255;
    return brightness > 125 ? '#000' : '#fff';
  }

  editSection (section) {
    this.sectionEdit = section;
  }

  changeSections () {
    this.getAllSections();
  }

  getAllSections(){
    this.sectionsService.getAllSections().subscribe( sections => {
      this.sections = sections;
    });
  }




}

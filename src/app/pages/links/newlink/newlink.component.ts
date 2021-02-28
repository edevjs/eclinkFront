import { SectionService } from './../../../services/section.service';
import { SectionService } from 'src/app/services/section.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-newlink',
  templateUrl: './newlink.component.html',
  styleUrls: ['./newlink.component.sass']
})
export class NewlinkComponent implements OnInit {

  @ViewChild('closebutton') closebutton;

  sectionsList = [];
  dropdownSettings = {};

  public linkForm = this.formBuilder.group({
    title: ['', Validators.required ],
    url: ['', Validators.required ],
    sections: [ [] ]
  });

  sections: any[];

  constructor(
    private sectionsService: SectionService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.sectionsService.getAllSections().subscribe( data => {
      if(data && data.sections) {
        this.sectionsList = data.sections;
      }
    });
   
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'uid',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };

  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  saveLink() {
    console.log(this.linkForm.value);
    /*
    this.sectionsService.saveSections(this.linkForm.value).subscribe(sections => {
      this.sections = sections;
      this.closebutton.nativeElement.click();
    });
    */
  }

}

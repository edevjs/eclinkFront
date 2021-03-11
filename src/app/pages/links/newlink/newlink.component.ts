import { EventEmitter, Input, OnChanges } from '@angular/core';
import { LinksService } from './../../../services/links.service';
import { SectionService } from 'src/app/services/section.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-newlink',
  templateUrl: './newlink.component.html',
  styleUrls: ['./newlink.component.sass']
})
export class NewlinkComponent implements OnInit, OnChanges {

  @ViewChild('closebutton') closebutton;

  @Input() link;

  @Output() changeLinks = new EventEmitter();

  links;
  sectionsList = [];
  dropdownSettings = {};

  public linkForm = this.formBuilder.group({
    title: ['', Validators.required ],
    url: ['', Validators.required ],
    sections: [ [] ],
    user: '',
    uid: '',
    image: null
  });

  sections: any[];

  constructor(
    private sectionsService: SectionService,
    private formBuilder: FormBuilder,
    private linkService: LinksService,
  ) { }

  ngOnInit() {
    this.sectionsService.getAllSections().subscribe( data => {
      if(data && data.sections) {
        this.sectionsList = data.sections;
        console.log(this.sectionsList);
      }
    });

    this.linkService.editLinkEmitter.subscribe( link=> {
      console.log(`link :: ${link}`)
      this.link = link;
      this.linkForm.patchValue(this.link);
    })


   
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };

  }

  // ngOnChanges() {
  //   if(this.link) {
  //     console.log(this.link);
  //     this.linkForm.patchValue(this.link);
  //   }
  // }

  createLink() {
    this.resetForm();
  }


  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  saveLink() {
    this.linkForm.controls.sections.setValue(this.linkForm.get('sections').value.map(s => s._id));
    this.linkForm.controls.image.setValue('');
    
    this.linkService.saveLinks(this.linkForm.value).subscribe( links => {
      this.changeLinks.emit();
      this.closebutton.nativeElement.click();
    });
  }

  resetForm(){
    this.linkForm.reset();
  }

}

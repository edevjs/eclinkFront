import { SectionForm } from './../../../interfaces/section-form.interface';
import { SectionService } from 'src/app/services/section.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newsection',
  templateUrl: './newsection.component.html',
  styleUrls: ['./newsection.component.sass']
})
export class NewsectionComponent implements OnInit, OnChanges {

  @ViewChild('closebutton') closebutton;
  
  @Input() section: SectionForm;

  @Output() changeSections = new EventEmitter();

  public sectionForm = this.formBuilder.group({
    name: ['', Validators.required ],
    color: ['#DDDDDD'],
    createdBy: [''],
    uid: ['']
  });


  constructor(
    private sectionsService: SectionService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if(this.section) {
      this.sectionForm.setValue(this.section)
    }
  }

  createSection() {
    this.resetForm();
  }

  saveSection() {
    this.sectionsService.saveSections(this.sectionForm.value).subscribe(sections => {
      this.changeSections.emit()
      this.closebutton.nativeElement.click();
    });
  }

  resetForm(){
    this.sectionForm.reset();
  }


}

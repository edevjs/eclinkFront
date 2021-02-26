import { SectionService } from 'src/app/services/section.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newlink',
  templateUrl: './newlink.component.html',
  styleUrls: ['./newlink.component.sass']
})
export class NewlinkComponent implements OnInit {

  @ViewChild('closebutton') closebutton;

  public sectionForm = this.formBuilder.group({
    name: ['', Validators.required ],
    color: ['#0000ff']
  });

  sections: any[];

  constructor(
    private sectionsService: SectionService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  saveSection() {
    console.log(this.sectionForm.value);
    /*
    this.sectionsService.saveSections(this.sectionForm.value).subscribe(sections => {
      this.sections = sections;
      this.closebutton.nativeElement.click();
    });
    */
  }

}

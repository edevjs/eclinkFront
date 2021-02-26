import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlinkComponent } from './newlink.component';

describe('NewlinkComponent', () => {
  let component: NewlinkComponent;
  let fixture: ComponentFixture<NewlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlinksComponent } from './viewlinks.component';

describe('ViewlinksComponent', () => {
  let component: ViewlinksComponent;
  let fixture: ComponentFixture<ViewlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

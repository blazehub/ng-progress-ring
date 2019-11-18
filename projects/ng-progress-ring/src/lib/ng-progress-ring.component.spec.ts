import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProgressRingComponent } from './ng-progress-ring.component';

describe('NgProgressRingComponent', () => {
  let component: NgProgressRingComponent;
  let fixture: ComponentFixture<NgProgressRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgProgressRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgProgressRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

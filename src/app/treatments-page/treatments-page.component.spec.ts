import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsPageComponent } from './treatments-page.component';

describe('TreatmentsPageComponent', () => {
  let component: TreatmentsPageComponent;
  let fixture: ComponentFixture<TreatmentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersItemComponent } from './careers-item.component';

describe('CareersItemComponent', () => {
  let component: CareersItemComponent;
  let fixture: ComponentFixture<CareersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

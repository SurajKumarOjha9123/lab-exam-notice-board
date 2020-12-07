import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDisplayComponent } from './department-display.component';

describe('DepartmentDisplayComponent', () => {
  let component: DepartmentDisplayComponent;
  let fixture: ComponentFixture<DepartmentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDisplayComponent } from './notice-display.component';

describe('NoticeDisplayComponent', () => {
  let component: NoticeDisplayComponent;
  let fixture: ComponentFixture<NoticeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

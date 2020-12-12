import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoupounsComponent } from './mycoupouns.component';

describe('MycoupounsComponent', () => {
  let component: MycoupounsComponent;
  let fixture: ComponentFixture<MycoupounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycoupounsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycoupounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

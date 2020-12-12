import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileaccountComponent } from './profileaccount.component';

describe('ProfileaccountComponent', () => {
  let component: ProfileaccountComponent;
  let fixture: ComponentFixture<ProfileaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

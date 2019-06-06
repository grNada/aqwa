import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSimplUserComponent } from './profile-simpl-user.component';

describe('ProfileSimplUserComponent', () => {
  let component: ProfileSimplUserComponent;
  let fixture: ComponentFixture<ProfileSimplUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSimplUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSimplUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

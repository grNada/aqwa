import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviProjetComponent } from './suivi-projet.component';

describe('SuiviProjetComponent', () => {
  let component: SuiviProjetComponent;
  let fixture: ComponentFixture<SuiviProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCandidateComponent } from './local-candidate.component';

describe('LocalCandidateComponent', () => {
  let component: LocalCandidateComponent;
  let fixture: ComponentFixture<LocalCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

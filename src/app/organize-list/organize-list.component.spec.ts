import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeListComponent } from './organize-list.component';

describe('OrganizeListComponent', () => {
  let component: OrganizeListComponent;
  let fixture: ComponentFixture<OrganizeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuoKeibaComponent } from './chuo-keiba.component';

describe('ChuoKeibaComponent', () => {
  let component: ChuoKeibaComponent;
  let fixture: ComponentFixture<ChuoKeibaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuoKeibaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuoKeibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

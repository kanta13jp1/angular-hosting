import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiminComponent } from './jimin.component';

describe('JiminComponent', () => {
  let component: JiminComponent;
  let fixture: ComponentFixture<JiminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

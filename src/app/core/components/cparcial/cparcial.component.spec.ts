import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CparcialComponent } from './cparcial.component';

describe('CparcialComponent', () => {
  let component: CparcialComponent;
  let fixture: ComponentFixture<CparcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CparcialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CparcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

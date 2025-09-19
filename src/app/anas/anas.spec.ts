import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anas } from './anas';

describe('Anas', () => {
  let component: Anas;
  let fixture: ComponentFixture<Anas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

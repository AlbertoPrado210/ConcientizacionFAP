import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcientizacionComponent } from './concientizacion';

describe('ConcientizacionComponent', () => {
  let component: ConcientizacionComponent;
  let fixture: ComponentFixture<ConcientizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcientizacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcientizacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

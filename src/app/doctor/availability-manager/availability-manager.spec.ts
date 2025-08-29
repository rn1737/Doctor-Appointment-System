import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityManager } from './availability-manager';

describe('AvailabilityManager', () => {
  let component: AvailabilityManager;
  let fixture: ComponentFixture<AvailabilityManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

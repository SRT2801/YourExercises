import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutineDetailsPage } from './routine-details.page';

describe('RoutineDetailsPage', () => {
  let component: RoutineDetailsPage;
  let fixture: ComponentFixture<RoutineDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

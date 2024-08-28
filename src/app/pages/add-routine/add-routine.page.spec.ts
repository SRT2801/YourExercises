import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRoutinePage } from './add-routine.page';

describe('AddRoutinePage', () => {
  let component: AddRoutinePage;
  let fixture: ComponentFixture<AddRoutinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

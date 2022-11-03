import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReminderComponent } from './monthly-reminder.component';

describe('MonthlyReminderComponent', () => {
  let component: MonthlyReminderComponent;
  let fixture: ComponentFixture<MonthlyReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

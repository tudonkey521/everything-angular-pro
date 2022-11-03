import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-reminder',
  templateUrl: './monthly-reminder.component.html',
  styleUrls: ['./monthly-reminder.component.scss']
})
export class MonthlyReminderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Monthyl Reminder")
  }

}

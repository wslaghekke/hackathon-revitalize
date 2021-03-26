import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent {
  currentSprint = 12;
  selectedWeek = 12;

  days = [
    'Ma',
    'Di',
    'Wo',
    'Do',
    'Vr'
  ];

  dayParts = [
    'Ochtend',
    'Lunch',
    'Middag'
  ];

  constructor() { }

  random(percentage = 50): boolean {
    return (Math.random() * 100) < percentage;
  }

  previousSprint(): void {
    this.currentSprint -= 2;
    this.selectedWeek = this.currentSprint;
  }

  nextSprint(): void {
    this.currentSprint += 2;
    this.selectedWeek = this.currentSprint;
  }
}

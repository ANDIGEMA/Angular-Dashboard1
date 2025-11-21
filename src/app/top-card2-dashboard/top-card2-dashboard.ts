import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-card2-dashboard',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-card2-dashboard.html',
  styleUrl: './top-card2-dashboard.css',
})
export class TopCard2Dashboard {
 faCalendarDays = faCalendarDays;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-card3-dashboard',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-card3-dashboard.html',
  styleUrl: './top-card3-dashboard.css',
})
export class TopCard3Dashboard {
  faDatabase = faDatabase;
}

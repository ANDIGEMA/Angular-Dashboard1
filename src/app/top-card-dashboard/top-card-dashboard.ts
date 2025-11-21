import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-top-card-dashboard',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-card-dashboard.html',
  styleUrl: './top-card-dashboard.css',
})
export class TopCardDashboard {
 faUsers = faUsers;
}

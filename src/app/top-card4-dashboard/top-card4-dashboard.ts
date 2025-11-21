import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-card4-dashboard',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-card4-dashboard.html',
  styleUrl: './top-card4-dashboard.css',
})
export class TopCard4Dashboard {
 faArrowsRotate = faArrowsRotate;
}

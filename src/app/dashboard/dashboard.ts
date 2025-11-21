import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopCardDashboard } from '../top-card-dashboard/top-card-dashboard';
import { TopCard2Dashboard } from '../top-card2-dashboard/top-card2-dashboard';
import { TopCard3Dashboard } from '../top-card3-dashboard/top-card3-dashboard';
import { TopCard4Dashboard } from '../top-card4-dashboard/top-card4-dashboard';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TopCardDashboard, TopCard2Dashboard, TopCard3Dashboard, TopCard4Dashboard, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}

import { Component, signal } from '@angular/core';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { Main } from './main/main';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TopCardDashboard } from './top-card-dashboard/top-card-dashboard';
import { TopCard2Dashboard } from './top-card2-dashboard/top-card2-dashboard';
import { TopCard3Dashboard } from './top-card3-dashboard/top-card3-dashboard';
import { TopCard4Dashboard } from './top-card4-dashboard/top-card4-dashboard';



@Component({
  selector: 'app-root',
  imports: [LeftSidebar, Main, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLeftSidebarCollapsed = signal<boolean>(false);
  protected readonly title = signal('dashboard');
}

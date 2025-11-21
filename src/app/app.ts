import { Component, signal } from '@angular/core';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { Main } from './main/main';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



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

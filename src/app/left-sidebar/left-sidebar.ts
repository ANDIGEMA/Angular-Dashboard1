
import { Component, input} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes, faToolbox, faBriefcase, faShoppingBag, faBoxes, faHome} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {
  faBars = faBars;
  faTimes = faTimes;

  // Sidebar icons
  faBriefcase = faBriefcase
  faHome = faHome;
  faToolbox = faToolbox;
  faShoppingBag = faShoppingBag
  faBoxes = faBoxes;

  isCollapsed = false;


toggleSidebar() {
  this.isCollapsed = !this.isCollapsed;
}

   // Array of sidebar links
  menuItems = [
    { name: 'Dashboard', icon: faHome, routerLink: '/dashboard' },
    { name: 'Products', icon: faShoppingBag, routerLink: '/products'},
    { name: 'Pages',    icon: faBriefcase, routerLink: '/pages' },
    { name: 'Settings',   icon: faToolbox, routerLink: '/settings' },
  ];
}

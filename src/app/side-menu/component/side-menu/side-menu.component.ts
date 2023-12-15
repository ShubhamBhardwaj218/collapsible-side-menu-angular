import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from '../../../dashboard/component/dashboard/dashboard.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, DashboardComponent, RouterModule, MatSidenavModule, TitleCasePipe, MatIconModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {

  isExpanded = true;
  sideMenuList: string[] = ['home', 'about', 'contacts'];

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}

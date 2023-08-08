import { Component } from '@angular/core';
import { NavigationService } from 'src/app/@dw/services/navigation/navigation.service';

@Component({
  selector: 'layout-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  navItems: any;

  constructor(private navigationService: NavigationService) {
    this.navItems = this.navigationService.items();
    // console.log(this.navItems)
  }
}

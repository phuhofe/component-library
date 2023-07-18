import { Component, Input, ViewChild } from '@angular/core';
import { NavigationMenuItemComponent } from '../navigation-menu-item/navigation-menu-item.component';

@Component({
  selector: 'flora-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  @Input() desktopText = '';
  @Input() mobileIcon = '';
  @Input() desktopIcon = '';

  @ViewChild(NavigationMenuItemComponent, { read: NavigationMenuItemComponent }) inputAutoComplete: NavigationMenuItemComponent;
}

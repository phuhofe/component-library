import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuItemComponent } from './navigation-menu-item.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [NavigationMenuItemComponent],
  imports: [CommonModule, MatMenuModule],
  exports: [NavigationMenuItemComponent],
})
export class NavigationMenuItemModule {}

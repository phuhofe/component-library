import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [CommonModule],
  exports: [NavigationBarComponent],
})
export class NavigationBarModule {}

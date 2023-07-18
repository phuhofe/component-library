import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModalComponent } from './settings-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LanguageSwitcherModule } from '../language-switcher/language-switcher.module';

@NgModule({
  declarations: [SettingsModalComponent],
  imports: [CommonModule, CardModule, LanguageSwitcherModule, MatButtonModule, MatTabsModule, MatIconModule, MatDividerModule],
  exports: [SettingsModalComponent],
})
export class SettingsModalModule {}

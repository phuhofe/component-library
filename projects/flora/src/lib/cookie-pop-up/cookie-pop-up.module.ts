import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiePopUpComponent } from './cookie-pop-up.component';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../card/card.module';
import { SettingToggleModule } from '../setting-toggle/setting-toggle.module';

@NgModule({
  declarations: [CookiePopUpComponent],
  imports: [CommonModule, CardModule, MatButtonModule, SettingToggleModule],
  exports: [CookiePopUpComponent],
})
export class CookiePopUpModule {}

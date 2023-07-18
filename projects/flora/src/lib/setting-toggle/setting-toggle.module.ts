import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { SettingToggleComponent } from './setting-toggle.component';

@NgModule({
  declarations: [SettingToggleComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatRadioModule
  ],
  exports: [SettingToggleComponent],
})
export class SettingToggleModule {}

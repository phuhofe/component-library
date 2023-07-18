import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { SortComponent } from './sort.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [SortComponent],
  exports: [SortComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule, OverlayModule, MatRippleModule, CardModule],
})
export class SortModule {}

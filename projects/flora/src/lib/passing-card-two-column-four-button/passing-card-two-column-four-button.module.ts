import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { PassingCardTwoColumnFourButtonComponent } from './passing-card-two-column-four-button.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [PassingCardTwoColumnFourButtonComponent],
  imports: [CommonModule, HttpClientModule, MatIconModule, MatRippleModule, CardModule],
  exports: [PassingCardTwoColumnFourButtonComponent],
})
export class PassingCardTwoColumnFourButtonModule {}

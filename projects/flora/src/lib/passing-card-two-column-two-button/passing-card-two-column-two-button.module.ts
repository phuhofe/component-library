import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { PassingCardTwoColumnTwoButtonComponent } from './passing-card-two-column-two-button.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [PassingCardTwoColumnTwoButtonComponent],
  imports: [CommonModule, HttpClientModule, MatIconModule, MatRippleModule, CardModule],
  exports: [PassingCardTwoColumnTwoButtonComponent]
})
export class PassingCardTwoColumnTwoButtonModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
​
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
​
import { PassingCardComponent } from './passing-card.component';
import { CardModule } from '../card/card.module';
​
@NgModule({
  declarations: [PassingCardComponent],
  imports: [CommonModule, HttpClientModule, MatIconModule, MatRippleModule, CardModule],
  exports: [PassingCardComponent]
})
export class PassingCardModule {}

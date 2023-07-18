import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { SearchResultComponent } from './search-result.component';
import { PassingCardModule } from '../passing-card/passing-card.module';
import { PassingCardTwoColumnTwoButtonModule } from '../passing-card-two-column-two-button/passing-card-two-column-two-button.module';
import { PaginatorModule } from '../paginator/paginator.module';
import { PassingCardTwoColumnFourButtonModule } from '../passing-card-two-column-four-button/passing-card-two-column-four-button.module';

@NgModule({
  declarations: [SearchResultComponent],
  exports: [SearchResultComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
    PassingCardModule,
    PassingCardTwoColumnTwoButtonModule,
    PassingCardTwoColumnFourButtonModule,
    PaginatorModule,
  ],
})
export class SearchResultModule {}

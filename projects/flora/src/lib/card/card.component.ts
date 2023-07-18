import { Component, Input, OnInit } from '@angular/core';
import { CardPaddingSize, CardShadowSize } from '../enums/card';

@Component({
  selector: 'flora-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() padding: CardPaddingSize = CardPaddingSize.DEFAULT;
  @Input() shadow: CardShadowSize = CardShadowSize.DEFAULT;
  @Input() matCard = false;

  cardStyles = [];

  constructor() {}

  ngOnInit(): void {
    this.cardStyles.push('padding-' + this.padding);
    this.cardStyles.push('shadow-' + this.shadow);
  }
}

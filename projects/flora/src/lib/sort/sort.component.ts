import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardPaddingSize } from '../enums/card';
import { SortItemsType } from '../interfaces/Sort';

@Component({
  selector: 'flora-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Input() label: string;
  @Input() items: Array<SortItemsType>;

  @Output() sortSelect = new EventEmitter();

  CardPaddingSize = CardPaddingSize;
  selectedValue: string = null;
  isOpen = false;

  constructor() {}

  onSelect(value: string): void {
    this.isOpen = false;
    this.selectedValue = value;
    this.sortSelect.emit(this.selectedValue);
  }
}

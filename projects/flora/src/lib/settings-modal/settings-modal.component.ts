import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CardPaddingSize } from '../enums/card';
import { LanguageObject } from '../interfaces/language-switcher.interface';
import { defaultLanguages } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'flora-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
  encapsulation: ViewEncapsulation.None, // Because we need to deal with mat-button margins
  host: {
    '[class.flora-settings-modal]': 'true',
  },
})
export class SettingsModalComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() pages: any = [];
  @Input() defaultLanguage: string;
  @Input() availableLanguages: LanguageObject[] = defaultLanguages;

  @Output() pageChange = new EventEmitter();
  @Output() modalClose = new EventEmitter();
  @Output() languageSelected = new EventEmitter();

  cardPaddingSize = CardPaddingSize;
  currentPage: any | null = null;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentPageFromPages();
  }

  ngOnChanges(changes: any): void {
    if (changes.pages && !changes.pages.firstChange) {
      this.getCurrentPageFromPages();
    }
  }

  onModalCloseEvent(): void {
    this.modalClose.emit({
      currentPage: this.currentPage,
    });
  }

  selectPage(pageToSelect): void {
    const previousPage = this.currentPage;
    this.currentPage = pageToSelect;
    this.updatePagesList();

    this.pageChange.emit({
      oldPage: previousPage,
      currentPage: this.currentPage,
    });
  }

  private updatePagesList(): void {
    this.pages.forEach((page) => {
      page.selected = false;

      if (this.currentPage && this.currentPage.slug === page.slug) {
        page.selected = true;
      }
    });
  }

  private getCurrentPageFromPages(): void {
    this.pages.forEach((page) => {
      if (page.selected) {
        this.currentPage = page;
      }
    });
  }

  onChangedLanguage(event): void {
    this.languageSelected.emit(event);
  }
}

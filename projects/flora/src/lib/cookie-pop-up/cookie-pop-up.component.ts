import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CardPaddingSize } from '../enums/card';
import { CookieCategory } from '../interfaces/cookie-pop-up';
import { SettingSubmitEventType, SettingToggleChangeEventType } from '../interfaces/setting-toggle';

@Component({
  selector: 'flora-cookie-pop-up',
  templateUrl: './cookie-pop-up.component.html',
  styleUrls: ['./cookie-pop-up.component.scss'],
  encapsulation: ViewEncapsulation.None, // Because we need to deal with mat-button margins
  host: {
    '[class.flora-cookie-pop-up]': 'true',
  },
})
export class CookiePopUpComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() cookieCategories: CookieCategory[] = [];
  @Input() formAction = '/submit-cookie-preferences'; // fallback
  @Input() isShowCookieCategories = false;

  @Output() cookieSubmit = new EventEmitter();
  @Output() cookieChange = new EventEmitter();

  cardPaddingSize = CardPaddingSize;
  cookieCategoriesState: SettingToggleChangeEventType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setupState();
  }

  ngOnChanges(changes: any): void {
    if (changes.cookieCategories && !changes.cookieCategories.firstChange) {
      this.cookieCategories = changes.cookieCategories.currentValue;
      this.setupState();
    }
  }

  setupState(): void {
    this.cookieCategories.forEach((cookieCategory) => {
      this.cookieCategoriesState[cookieCategory.slug] = {
        checked: cookieCategory.checked,
        indeterminate: cookieCategory.indeterminate,
      };
    });
  }

  onChangeEvent(event: SettingToggleChangeEventType, cookieCategorySlug: CookieCategory['slug']): void {
    if (Object.prototype.hasOwnProperty.call(this.cookieCategoriesState, cookieCategorySlug)) {
      this.cookieCategoriesState[cookieCategorySlug] = {
        checked: event.checked,
        indeterminate: event.indeterminate,
      };
    }

    this.cookieChange.emit({
      ...this.cookieCategoriesState,
    });
  }

  onSubmitEvent(event, submitter): void {
    event.preventDefault();

    const submitEvent: SettingSubmitEventType = {
      buttonClicked: submitter,
      cookieCategories: this.cookieCategoriesState,
    };

    this.cookieSubmit.emit(submitEvent);
  }
}

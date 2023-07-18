import { Component, Input, OnInit, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { LanguageObject } from '../interfaces/language-switcher.interface';

export const englishLanguageObject = {
  name: 'English',
  iso: 'en_GB',
  flag:
    'https://img.adstate.com/awdK8dUS6QnLhq7S2ClAKEbjqySIEJMammku7GBannU/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MvZW5fR0Iuc3ZnP2poUUdpbnZKOXNNcF9aM05lUGg4YWVoQ05Md0ouN3pY.svg',
};

export const defaultLanguages = [
  englishLanguageObject,
  {
    name: 'Norsk',
    iso: 'nb_NO',
    flag:
      'https://img.adstate.com/sGaNaR1FJeJdb2gGyGVgpucpcisVlne_lQ2JR5UVjYc/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MvbmJfTk8uc3ZnP2NkMUI5WHV0R2Nud1JVMW9yS1Q2YTB2a0Z3WHJpeHJt.svg',
  },
  {
    name: 'Svenska',
    iso: 'sv_SE',
    flag:
      'https://img.adstate.com/39EV0-jAsuKK2mL5AUSmhkGqUfnGpjuzleOFTluBs7k/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3Mvc3ZfU0Uuc3ZnP2t4SkExM0tGMHRTSXhpRTBsbzI4NXBEUmwwNERpX1Jt.svg',
  },
  {
    name: 'Dansk',
    iso: 'da_DK',
    flag:
      'https://img.adstate.com/ZoS_cAlbs1HDkIRZ84CbDUPts0ngxMYU5BGNF0NfhUw/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MvZGFfREsuc3ZnP1loT3VQUVh3TkxhZkh4b2tycWtrZGhSMVpkOU5ZSTE2.svg',
  },
  {
    name: 'Nederlands',
    iso: 'nl_NL',
    flag:
      'https://img.adstate.com/VC2lZTaMJwiQKuVrc_pkCRBB0ffBCuuSxUUVZaWeuWY/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MvbmxfTkwuc3ZnP2VueDJJRW9tV2ZId2dWU0kxRWtSbHFsOC5uc19UVlVU.svg',
  },
];

@Component({
  selector: 'flora-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit, OnChanges {
  @Input() defaultLanguage: string = englishLanguageObject.iso;
  @Input() hideTextOnMobile = false;
  @Input() availableLanguages: LanguageObject[] = defaultLanguages;
  @Input() buttonStyle = 'mat-flat-button';
  @Input() color = '';

  @Output() languageSelected = new EventEmitter();

  @ViewChild(MatSelect, { read: MatSelect }) selectElement: MatSelect;

  selectedLanguage: LanguageObject = englishLanguageObject;

  ngOnInit(): void {
    if (this.hideTextOnMobile) {
      this.buttonStyle += ' hide-text-on-mobile';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.availableLanguages && this.availableLanguages && this.availableLanguages.length > 0) {
      const newLanguage = this.availableLanguages.find((language: LanguageObject) => language.iso === this.defaultLanguage);
      if (newLanguage?.iso) {
        this.selectedLanguage = newLanguage;
      } else {
        console.warn(
          'Please spesify a valid ISO 3166-1 alpha-2 code. Also check which languages we support in our docs.',
          'You sent:',
          changes.defaultLanguage
        );
      }
    }
  }

  onLanguageSelected(language: LanguageObject): void {
    const newLanguageIsDifferentThanCurrent = this.selectedLanguage.iso !== language.iso;
    if (newLanguageIsDifferentThanCurrent) {
      this.selectedLanguage = language;
      this.languageSelected.emit(this.selectedLanguage);
    }
  }
}

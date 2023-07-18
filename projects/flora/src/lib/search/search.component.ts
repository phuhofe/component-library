import { Input, Output, Component, EventEmitter, SimpleChanges, ElementRef, ViewChild, OnInit, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ENTER, SPACE } from '@angular/cdk/keycodes';

export interface Location {
  label: string;
  value: string;
  isDefault: boolean;
}

@Component({
  selector: 'flora-search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnChanges {
  @Input() searchLabel = '';
  @Input() placeholder = '';
  @Input() searchLocations: Array<Location> = [];
  @Input() usingCustomTemplate = false;
  @Input() suggestKeywords: string[] = [];
  @Input() disableSearchButton: boolean;

  @Output() searchValueChange = new EventEmitter();
  @Output() searchValueInput = new EventEmitter();
  @ViewChild('searchBoxInput') searchBoxInput: ElementRef<HTMLInputElement>;
  searchForm = this.formBuilder.group({
    currentSearchKey: '',
    selectedKeywords: [''],
    searchLocation: '',
  });

  selectedLocation: string;
  keywords: string[] = [];
  filteredKeywords: Observable<string[]>;
  separatorKeysCodes: number[] = [SPACE, ENTER];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm.patchValue({
      selectedKeywords: [...this.keywords],
    });

    this.updateSearchLocationToUseDefault();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.searchLocations.length > 0) {
      this.updateSearchLocationToUseDefault();
    }
  }

  onSearchValueChange(): void {
    if (this.usingCustomTemplate) {
      this.searchValueChange.emit(true);
    }

    this.searchValueChange.emit(this.searchForm.value);
  }

  onSearchValueInput(event: Event & { target: HTMLInputElement }): void {
    if (event.target as HTMLInputElement) {
      const currentValue = event?.target?.value ?? null;
      this.searchValueInput.emit(currentValue);
    }
  }

  addKeyword(event: { value?: string; target?: { value: string } }): void {
    const value = (event.value || event.target?.value || '').trim();

    if (value) {
      this.keywords.push(value);

      this.searchForm.patchValue({
        selectedKeywords: this.keywords,
      });

      return this.onSearchValueChange();
    }

    return this.searchForm.patchValue({
      currentSearchKey: null,
    });
  }

  remove(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }

    this.searchForm.patchValue({
      selectedKeywords: [...this.keywords],
    });
    this.onSearchValueChange();
  }

  clearAll(): void {
    this.keywords = [];
    this.searchForm.patchValue({
      selectedKeywords: [...this.keywords],
    });
    this.onSearchValueChange();
  }

  updateSearchLocationToUseDefault(): void {
    const defaultLocation = this.searchLocations.find((item) => item.isDefault);

    if (defaultLocation) {
      this.selectedLocation = defaultLocation.value;
    } else if (this.searchLocations.length > 0) {
      this.selectedLocation = this.searchLocations[0].value;
    }
  }

  locationChange(event): void {
    if (event?.value) {
      this.onSearchValueChange();
    }
  }
}

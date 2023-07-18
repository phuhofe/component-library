import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { from, Observable, of, Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { FilterEnum } from '../enums/filter';
import { City } from '../interfaces/city';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

export const DefaultIsCollapsed = true;
export const DefaultUsingCustomTemplate = false;

@Component({
  selector: 'flora-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnChanges, OnInit {
  @Input() filterButton = '';
  @Input() firstNameLabel = '';
  @Input() lastNameLabel = '';
  @Input() birthdateLabel = '';
  @Input() deathdateLabel = '';
  @Input() regionLabel = '';
  @Input() cityLabel = '';
  @Input() clearButton = '';
  @Input() cancelButton = '';
  @Input() applyButton = '';
  @Input() invalidDate = '';
  @Input() usingCustomTemplate: boolean = DefaultUsingCustomTemplate;
  @Input() cityOptions: any = {};
  @Input() isCollapsed: boolean = DefaultIsCollapsed;

  @Output() clear = new EventEmitter();
  @Output() filterParam = new EventEmitter();

  searchParam = {};
  regionOptions = [];
  filteredRegionOptions: Observable<any>;
  filteredCityOptions: Observable<any>;

  filterForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    birthDate: [''],
    deathDate: [''],
    cityId: [''],
    regionId: [''],
    isApply: [false],
  });

  today = new Date();
  filteredRegions = [];
  filteredCities = [];
  isClearFilter$ = new Subject();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filteredCityOptions = this.filterForm.get('cityId').valueChanges.pipe(
      startWith(''),
      map((value) => this.filterCity(value))
    );

    this.filterForm.get('cityId').valueChanges.subscribe((cityName) => {
      if (!cityName && this.cityOptions?.data?.length > 0) {
        return (this.filteredCities = this.cityOptions.data);
      }

      return this.filterCities(cityName);
    });

    this.filteredRegionOptions = this.filterForm.get('regionId').valueChanges.pipe(
      startWith(''),
      map((value) => this.filterRegion(value))
    );

    this.filteredRegionOptions.subscribe((data) => {
      if (data) {
        this.filteredRegions = data.sort((a, b) => a.name > b.name ? 1 : -1);
      }
    });

    this.filterForm.valueChanges.pipe(filter((formValue) => !formValue.isApply)).subscribe(() => {
      this.setFormValue(false);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredCities = this.cityOptions.data;
    if (changes.cityOptions && this.cityOptions && this.cityOptions.length > 0) {
      this.filteredCityOptions = from(this.cityOptions).pipe(
        map((citiesAndRegions: any) => {
          this.cityOptions = citiesAndRegions.data;
          return citiesAndRegions.data;
        })
      );
    }
  }

  filterCities(cityName: any): void {
    if (cityName && typeof cityName === 'string') {
      this.filteredCities = this.cityOptions.data.filter((data) => {
        return this.isIncludedInArray(data.name, cityName);
      });
    }
  }

  filterCity(option: string | City): Array<any> {
    let filterValue = '';

    if (typeof option === 'string') {
      filterValue = option.toLowerCase();
    } else {
      filterValue = option.name.toLowerCase();
    }

    return this.cityOptions.filter((cityOption) => this.isIncludedInArray(cityOption.name, filterValue));
  }

  filterRegion(option: string | City): Array<any> {
    let filterValue = '';

    if (typeof option === 'string') {
      filterValue = option.toLowerCase();
    } else {
      filterValue = option.name.toLowerCase();
    }

    return this.regionOptions.filter((regionOption) => this.isIncludedInArray(regionOption.name, filterValue));
  }

  toggleFilter(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  clearFilterForm(): void {
    this.isClearFilter$.next();
    if (this.usingCustomTemplate) {
      return this.clear.emit(true);
    }

    this.filterForm.patchValue({
      firstName: '',
      lastName: '',
      cityId: '',
      regionId: '',
      birthDate: '',
      deathDate: '',
      isApply: false,
    });

    return this.clear.emit();
  }

  onSelectCity(event: MatAutocompleteSelectedEvent): void {
    this.getRegionsByCityName(event.option.value);

    this.filterForm.patchValue({
      cityId: event.option.value.name,
    });

    if (event.option.value !== FilterEnum.allCountries) {
      this.regionOptions = [...this.getRegionsByCityName(event.option.value)];
    } else {
      this.regionOptions = [{ id: 0, name: FilterEnum.allCities }, ...this.getRegionsByCityName(event.option.value)];
    }

    this.filteredRegionOptions = of(this.regionOptions);
  }

  onSelectRegion(event: MatAutocompleteSelectedEvent): void {
    this.filterForm.patchValue({
      regionId: event.option.value.name,
    });
  }

  onOpenCitySelect(): void {
    if (!this.filterForm.get('cityId').value) {
      return this.filterForm.patchValue({
        cityId: '',
      });
    }
  }

  onOpenRegionSelect(): void {
    if (!this.filterForm.get('regionId').value) {
      return this.filterForm.patchValue({
        regionId: '',
      });
    }
  }

  clearCitySelect(): void {
    this.filterForm.patchValue({
      cityId: '',
    });
    this.regionOptions = [];
  }

  clearRegionSelect(): void {
    this.filterForm.patchValue({
      regionId: '',
    });
  }

  getRegionsByCityName(cityData): Array<City> {
    return this.cityOptions.data.find((city) => this.isEqualName(city.name, cityData.name)).cities;
  }

  getCityIdByName(cityName: string): any {
    return this.cityOptions.data.find((city) => this.isEqualName(city.name, cityName)).id;
  }

  getRegionIdByName(cityId: number, regionName: string): number {
    const regions = this.cityOptions.data.find((city) => city.id === cityId).cities;
    const regionId = regions.find((region) => this.isEqualName(region.name, regionName)).id;

    return regionId;
  }

  birthDateChange(value: string): void {
    this.filterForm.patchValue({ birthDate: value });
  }

  deathDateChange(value: string): void {
    this.filterForm.patchValue({ deathDate: value });
  }

  applyFilterForm(): void {
    this.setFormValue(true);
  }

  setFormValue(isApply: boolean): void {
    let city: any = {};
    let region: any = {};
    let cityName = '';
    let formValue = this.filterForm.value;

    if (formValue.cityId || formValue.regionId) {
      cityName = formValue.cityId.name ?? formValue.cityId;
      region = this.cityOptions.data.find((option) => {
        return this.isEqualName(option?.name, cityName);
      });

      if (region && region.cities) {
        city = region.cities.find((option) => {
          if (formValue.regionId.id) {
            return this.isEqualName(option?.name, formValue?.regionId?.name);
          }

          return this.isEqualName(option?.name, formValue?.regionId);
        });
      }
    }

    if (!formValue.cityId && formValue.regionId) {
      const cities = this.cityOptions.data.map((item) => item.cities);

      if (cities && cities.length > 0) {
        city = cities.find((item) => {
          return this.isEqualName(item?.name, formValue.regionId);
        });
      }
    }

    formValue = {
      ...formValue,
      isApply,
      birthDate: formValue.birthDate,
      deathDate: formValue.deathDate,
      cityId: city ? city.id : '',
      regionId: region ? region.id : '',
    };

    this.filterParam.emit(formValue);
  }

  private isIncludedInArray(compareData: string, comparingData: string): boolean {
    return compareData.toLowerCase().includes(comparingData.toLowerCase());
  }

  private isEqualName(compareData: string, comparingData: string): boolean {
    return compareData.toLowerCase() === comparingData.toLowerCase();
  }
}

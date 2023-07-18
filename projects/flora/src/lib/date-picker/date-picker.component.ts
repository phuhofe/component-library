import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'flora-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit, AfterViewInit {
  @Input() dateLabel = '';
  @Input() cancelButton = '';
  @Input() applyButton = '';
  @Input() invalidDate = '';
  @Input() isClearDate$: Observable<any>;

  @Output() dateChange = new EventEmitter();

  selected = null;
  dateSelected = null;
  selectedYear = null;
  selectedMonth = null;
  isCollapsed = true;
  today = new Date();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({ date: [''], validator: this.checkDateValidator });
    this.form.valueChanges.pipe(debounceTime(250)).subscribe((value) => {
      const date = value.date;

      const checkDate = new Date(date).toString();
      if (checkDate !== 'Invalid Date' || date === '') {
        this.dateChange.emit(date);
      }
    });
  }

  ngAfterViewInit(): void {
    this.isClearDate$?.subscribe(() => this.form.patchValue({ date: '' }));
  }

  checkDateValidator = (control: AbstractControl) => {
    const date = control.get('date').value;

    if (date) {
      const checkDate = new Date(date).toString();
      if (checkDate === 'Invalid Date') {
        return control.get('date').setErrors({
          invalidDate: true,
        });
      }
    }

    return null;
  }

  onConfirm(): void {
    this.isCollapsed = !this.isCollapsed;
    const datePipe = new DatePipe('en-US');
    this.dateSelected = null;
    if (this.selected) {
      this.dateSelected = datePipe.transform(this.selected, 'yyyy-MM-dd');
      this.form.patchValue({ date: this.dateSelected });
      this.dateChange.emit(this.form.value.date);
      return;
    }
    this.dateSelected = this.selectedYear + (this.selectedMonth ? '-' + this.selectedMonth : '');
    this.selected = new Date(this.dateSelected);

    if (this.selectedMonth && this.selectedYear) {
      this.dateSelected = this.dateSelected + '-01';
    }
    this.form.patchValue({ date: this.dateSelected });
    this.dateChange.emit(this.form.value.date);
  }

  onYearSelected(event: any, calendar: any): void {
    this.selectedYear = new Date(event).getFullYear();
    calendar.currentView = 'multi-year';
    this.selected = null;
    this.selectedMonth = null;
  }

  onMonthSelected(event: any): void {
    this.selectedMonth = new Date(event).getMonth() + 1;
    if (this.selectedMonth < 10) {
      this.selectedMonth = '0' + this.selectedMonth;
    }
  }

  toggleDatePicker(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}

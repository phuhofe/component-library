import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { SettingToggleIconColor, SettingToggleSize, SettingToggleState } from '../enums/setting-toggle.enum';
import { SettingToggleChangeEventType, SettingToggleType } from '../interfaces/setting-toggle';
import { inputId } from '../utils';

@Component({
  selector: 'flora-setting-toggle',
  templateUrl: './setting-toggle.component.html',
  styleUrls: ['./setting-toggle.component.scss'],
})
export class SettingToggleComponent implements OnChanges, AfterViewInit {
  @Input() state: SettingToggleState = SettingToggleState.OFF;
  @Input() title: SettingToggleType['title'] = null;
  @Input() description: SettingToggleType['description'] = null;
  @Input() icon: SettingToggleType['icon'] = null;
  @Input() iconColor: SettingToggleType['iconColor'] = SettingToggleIconColor.DEFAULT;
  @Input() size: SettingToggleSize = SettingToggleSize.COMFORTABLE;
  @Input() indeterminate: SettingToggleType['indeterminate'] = false;
  @Input() checked: SettingToggleType['checked'] = false;
  @Input() disabled: SettingToggleType['disabled'] = false;
  @Input() readonly: SettingToggleType['readonly'] = false;

  @Output() settingChange = new EventEmitter();

  @ViewChild('checkbox') checkbox: any;

  id = inputId('setting-toggle');
  settingToggleSize = SettingToggleSize;
  settingToggleState = SettingToggleState;
  settingToggleIconColor = SettingToggleIconColor;

  ngOnChanges(changes: any): void {
    if (changes.checked && !changes.checked.firstChange && changes.checked.previousValue !== changes.checked.currentValue) {
      this.checkbox.nativeElement.checked = changes.checked.currentValue;
      this.changeEvent();
    }

    if (
      changes.indeterminate &&
      !changes.indeterminate.firstChange &&
      changes.indeterminate.previousValue !== changes.indeterminate.currentValue
    ) {
      this.checkbox.nativeElement.indeterminate = changes.indeterminate.currentValue;
      this.changeEvent();
    }
  }

  ngAfterViewInit(): void {
    if (this.indeterminate) {
      this.checkbox.nativeElement.indeterminate = true;
    }
  }

  changeEvent(): void {
    const checkbox = this.checkbox.nativeElement;
    this.checked = checkbox.checked;
    this.indeterminate = checkbox.indeterminate;

    if (this.checked) {
      this.state = this.settingToggleState.ON;
    } else if (this.indeterminate) {
      this.state = this.settingToggleState.INTERMEDIATE;
    } else {
      this.state = this.settingToggleState.OFF;
    }

    const event: SettingToggleChangeEventType = {
      indeterminate: this.indeterminate,
      checked: this.checked,
      state: this.state,
    };

    this.settingChange.emit(event);
  }
}

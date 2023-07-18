import { SettingToggleIconColor, SettingToggleState } from '../enums/setting-toggle.enum';

export interface SettingToggleType {
  title?: string;
  description?: string;
  icon?: string;
  iconColor?: SettingToggleIconColor;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  readonly?: boolean;
}

export interface SettingToggleChangeEventType {
  indeterminate: SettingToggleType['indeterminate'];
  checked: SettingToggleType['checked'];
  state: SettingToggleState;
}

export interface SettingSubmitEventType {
  buttonClicked: string;
  cookieCategories: SettingToggleChangeEventType[];
}

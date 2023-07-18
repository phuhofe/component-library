import { SettingToggleIconColor } from '../enums/setting-toggle.enum';

export interface CookieCategory {
  slug: string;
  title: string;
  titleOriginal?: string;
  description: string;
  descriptionOriginal?: string;
  icon: string;
  iconColor?: SettingToggleIconColor;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  cookies?: any[];
}

import { Story, Meta } from '@storybook/angular/types-6-0';

import { ControlType, floraStoryWrapper } from 'stories/utils';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SettingToggleModule } from '@flora/lib/setting-toggle/setting-toggle.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingToggleComponent } from '@flora/lib/setting-toggle/setting-toggle.component';
import { SettingToggleSize } from '@flora/lib/enums/setting-toggle.enum';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/Setting toggle',
  component: SettingToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [SettingToggleModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) => floraStoryWrapper(story)),
  ],
  argTypes: {
    size: {
      name: 'Size',
      control: { type: ControlType.InputTypeText },
    },
  },
} as Meta;

const mockTitle = 'Lorem ipsum';
const mockDescriptionLong = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit ame, adipisci velit';
const mockDescriptionShort = 'Neque porro quisquam est qui dolorem';
const mockIcon = 'security';

// const Template: Story<SettingToggleComponent> = (args) => ({
//   props: {
//     ...args,
//     change: action('x'),
//   },
// });

// export const Default: Story<SettingToggleComponent> = Template.bind({});
// Default.args = {};

export const Default: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
  },
});

export const Checked: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    checked: true,
  },
});

export const Indeterminate: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    indeterminate: true,
  },
});

export const Disabled: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    disabled: true,
  },
});

export const Readonly: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    readonly: true,
  },
});

export const CompactSize: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    size: SettingToggleSize.COMPACT,
    icon: mockIcon,
    title: mockTitle,
    description: mockDescriptionLong,
  },
});

export const ComfortableSize: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    size: SettingToggleSize.COMFORTABLE,
    icon: mockIcon,
    title: mockTitle,
    description: mockDescriptionLong,
  },
});

export const NoTitle: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    icon: mockIcon,
    description: mockDescriptionLong,
  },
});

export const NoDescription: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    title: mockTitle,
    icon: mockIcon,
  },
});

export const NoIcon: Story<SettingToggleComponent> = (args: SettingToggleComponent) => ({
  props: {
    ...args,
    change: action('settingChange'),
    title: mockTitle,
    description: mockDescriptionLong,
  },
});

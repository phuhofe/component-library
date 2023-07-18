import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavigationBarComponent } from '@flora/lib/navigation-bar/navigation-bar.component';
import { NavigationMenuModule } from '@flora/lib/navigation-menu/navigation-menu.module';
import { NavigationMenuItemModule } from '@flora/lib/navigation-menu-item/navigation-menu-item.module';
import { NavigationMenuComponent } from '@flora/lib/navigation-menu/navigation-menu.component';
import { ControlType, floraStoryWrapper } from 'stories/utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Molecules/Navigation Menu',
  component: NavigationBarComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, NavigationMenuModule, NavigationMenuItemModule],
    }),
    componentWrapperDecorator((story) => floraStoryWrapper(story)),
  ],
  argTypes: {
    desktopText: {
      name: 'desktopText',
      defaultValue: '',
      type: { required: false },
      control: { type: ControlType.InputTypeText },
    },
    mobileIcon: {
      name: 'mobileIcon',
      defaultValue: '',
      type: { required: false },
      control: { type: ControlType.InputTypeText },
    },
    desktopIcon: {
      name: 'desktopIcon',
      defaultValue: '',
      type: { required: false },
      control: { type: ControlType.InputTypeText },
    },
  },
} as Meta;

const defaultExample = `
<flora-navigation-menu desktopText="Menu" mobileIcon="menu" desktopIcon="expand_more">
  <flora-navigation-menu-item>
    <a>Item 1</a>
  </flora-navigation-menu-item>
  <flora-navigation-menu-item>
    <a>Item 2</a>
  </flora-navigation-menu-item>
  <flora-navigation-menu-item>
    <a>Item 3</a>
  </flora-navigation-menu-item>
</flora-navigation-menu>`;

export const Default: Story<NavigationMenuComponent> = (args: NavigationMenuComponent) => ({
  props: {
    ...args,
  },
  template: defaultExample,
});

Default.parameters = {
  docs: {
    source: {
      code: defaultExample,
    },
  },
};




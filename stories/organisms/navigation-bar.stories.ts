import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavigationBarComponent } from '@flora/lib/navigation-bar/navigation-bar.component';
import { NavigationBarModule } from '@flora/lib/navigation-bar/navigation-bar.module';
import { LogoModule } from '@flora/lib/logo/logo.module';
import { LanguageSwitcherModule } from '@flora/lib/language-switcher/language-switcher.module';
import { NavigationMenuModule } from '@flora/lib/navigation-menu/navigation-menu.module';
import { NavigationMenuItemModule } from '@flora/lib/navigation-menu-item/navigation-menu-item.module';
import { ControlType, floraStoryWrapper } from 'stories/utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Organisms/Navigation Bar',
  component: NavigationBarComponent,
  argTypes: {
    isSmallScreen: {
      options: [true, false],
      control: { type: ControlType.Boolean},
    }
  },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        NavigationBarModule,
        LogoModule,
        LanguageSwitcherModule,
        NavigationMenuModule,
        NavigationMenuItemModule,
        MatIconModule,
      ],
    }),
  ],
} as Meta;

const rightLanguageSwitcherAndMenu = `<flora-language-switcher right buttonStyle="mat-stroked-button" [hideTextOnMobile]="true"></flora-language-switcher>
  <flora-navigation-menu right desktopText="Menu" mobileIcon="menu" desktopIcon="expand_more">
    <flora-navigation-menu-item>
      <a>
        <mat-icon>home</mat-icon>
        <span>Link with icon before</span>
      </a>
    </flora-navigation-menu-item>
    <flora-navigation-menu-item>
      <a>
        <span>Link with icon after</span>
        <mat-icon>home</mat-icon>
      </a>
    </flora-navigation-menu-item>
    <flora-navigation-menu-item>
      <a>Link without icon</a>
    </flora-navigation-menu-item>
  </flora-navigation-menu>`;

const leftAlignedLogo = `
<flora-navigation-bar>
  <flora-logo left imageSource="https://national-portal-fe.development.ads1.itpartner.no/assets/images/minnesider/logo.png"></flora-logo>
  ${rightLanguageSwitcherAndMenu}
</flora-navigation-bar>
`;

export const LeftAlignedLogo: Story<NavigationBarComponent> = (args: NavigationBarComponent) => ({
  props: {
    ...args,
  },
  template: floraStoryWrapper(leftAlignedLogo, {
    style: {
      width: '1200px',
    },
  }),
});

LeftAlignedLogo.parameters = {
  docs: {
    source: {
      code: leftAlignedLogo,
    },
  },
};

const centerAlignedLogo = `
<flora-navigation-bar>
  <flora-logo center imageSource="https://national-portal-fe.development.ads1.itpartner.no/assets/images/minnesider/logo.png"></flora-logo>
  ${rightLanguageSwitcherAndMenu}
</flora-navigation-bar>
`;

export const CenterAlignedLogo: Story<NavigationBarComponent> = (args: NavigationBarComponent) => ({
  props: {
    ...args,
  },
  template: floraStoryWrapper(centerAlignedLogo, {
    style: {
      width: '1200px',
    },
  }),
});

CenterAlignedLogo.parameters = {
  docs: {
    source: {
      code: centerAlignedLogo,
    },
  },
};

const leftCenterAndRightContent = `
<flora-navigation-bar>
  <flora-logo left imageSource="https://national-portal-fe.development.ads1.itpartner.no/assets/images/minnesider/logo.png"></flora-logo>
  <a center href="#">Center link 1</a>
  <a center href="#">Center link 2</a>
  ${rightLanguageSwitcherAndMenu}
</flora-navigation-bar>
`;

export const LeftCenterAndRightContent: Story<NavigationBarComponent> = (args: NavigationBarComponent) => ({
  props: {
    ...args,
  },
  template: floraStoryWrapper(leftCenterAndRightContent, {
    style: {
      width: '1200px',
    },
  }),
});

LeftCenterAndRightContent.parameters = {
  docs: {
    source: {
      code: leftCenterAndRightContent,
    },
  },
};

const leftCenterAndRightContentWithStoreButtons = `
<flora-navigation-bar>

  <flora-logo center imageSource="https://national-portal-fe.development.ads1.itpartner.no/assets/images/minnesider/logo.png"></flora-logo>

  <a style="width: 116px" left>
    <img style="width: 116px"
      src="https://img.adstate.com/3ZLgP8r2QlgQCW884-vu47_39D-Ak69nhfNe5VR-zQw/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS8vYWRtZW1vcmlhLXJlc291cmNlcy9kb3dubG9hZC1iYWRnZXMvZW4tYXBwbGUtYXBwLXN0b3JlLWRvd25sb2FkLWJhZGdlLnN2Zw.svg"
      alt="Apple App Store badge"
    />
  </a>

  <a style="width: 116px" left>
    <img style="width: 116px"
      src="https://img.adstate.com/x5Y0tgcCEFdnZC5BAtTpGZQzv1E58xnYw46juESgoAU/rs:fit:384:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS8vYWRtZW1vcmlhLXJlc291cmNlcy9kb3dubG9hZC1iYWRnZXMvZW4tZ29vZ2xlLXBsYXktc3RvcmUtZG93bmxvYWQtYmFkZ2UucG5n.png"
      alt="Google Play Store badge"
    />
  </a>

  ${rightLanguageSwitcherAndMenu}

  </flora-navigation-bar>
`;

export const LeftCenterAndRightContentWithStoreButtons: Story<NavigationBarComponent> = (args: NavigationBarComponent) => ({
  props: {
    ...args,
    isSmallScreen: true
  },
  template: floraStoryWrapper(leftCenterAndRightContentWithStoreButtons, {
    style: {
      width: '1200px',
    },
  }),
});

LeftCenterAndRightContentWithStoreButtons.parameters = {
  docs: {
    source: {
      code: leftCenterAndRightContentWithStoreButtons,
    },
  },
};

import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CookiePopUpComponent } from '../../projects/flora/src/lib/cookie-pop-up/cookie-pop-up.component';
import { CookiePopUpModule } from '@flora/lib/cookie-pop-up/cookie-pop-up.module';
import { CookieCategory } from '@flora/lib/interfaces/cookie-pop-up';
import { floraStoryWrapper } from 'stories/utils';
import { MatButtonModule } from '@angular/material/button';
import { SettingToggleModule } from '@flora/lib/setting-toggle/setting-toggle.module';
import { MatDividerModule } from '@angular/material/divider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/Cookie pop-up',
  component: CookiePopUpComponent,
  decorators: [
    moduleMetadata({
      imports: [CookiePopUpModule, SettingToggleModule, MatButtonModule, MatDividerModule],
    }),
  ],
} as Meta;

const exampleCookieCategories: CookieCategory[] = [
  {
    slug: 'necessary',
    title: 'Necessary',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    icon: 'settings',
    checked: true,
    disabled: true,
  },
  {
    slug: 'functional',
    title: 'Functional',
    description: 'These cookies enable the website to provide enhanced functionality.',
    icon: 'ads_click',
    checked: false,
    disabled: false,
  },
  {
    slug: 'performance',
    title: 'Performance',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    icon: 'speed',
    checked: false,
    disabled: false,
  },
  {
    slug: 'personalization',
    title: 'Personalization',
    description: 'These cookies may be set through our site by our advertising partners.',
    icon: 'auto_fix_high',
    checked: false,
    disabled: false,
  },
];

const exampleWithoutCategoriesTemplate = `
<flora-cookie-pop-up #cookiePopUp [title]="title">
  <p description>
    Description for cookie pop-up. Proin ac ipsum in ipsum facilisis vehicula. Sed aliquet dolor non licinia vehicula. With a <a href='#'>link</a>
  </p>
  <button otherActions mat-stroked-button color="basic" (click)="cookiePopUp.onSubmitEvent($event, 'see_details')">See details</button>
  <button otherActions mat-stroked-button color="basic" (click)="cookiePopUp.onSubmitEvent($event, 'accept_selected')">Accept selected</button>
  <button primaryActions mat-flat-button color="primary" (click)="cookiePopUp.onSubmitEvent($event, 'accept_all')">Accept all</button>
</flora-cookie-pop-up>
`;
export const ExampleWithoutCategories: Story<CookiePopUpComponent> = (args: CookiePopUpComponent) => ({
  props: {
    ...args,
    title: 'Title for the cookie pop-up',
    onChange: action('onChange'),
    onSubmit: action('onSubmit'),
  },
  template: floraStoryWrapper(exampleWithoutCategoriesTemplate, { style: { width: '480px' } }),
});
ExampleWithoutCategories.parameters = { docs: { source: { code: exampleWithoutCategoriesTemplate } } };

const exampleWithCategoriesTemplate = `
<flora-cookie-pop-up #cookiePopUp [title]="title" [cookieCategories]="cookieCategories">
  <p description>
    Description for cookie pop-up. Proin ac ipsum in ipsum facilisis vehicula. Sed aliquet dolor non licinia vehicula. With a <a href='#'>link</a>
  </p>
  <button otherActions mat-stroked-button color="basic" (click)="cookiePopUp.onSubmitEvent($event, 'see_details')">See details</button>
  <button otherActions mat-stroked-button color="basic" (click)="cookiePopUp.onSubmitEvent($event, 'accept_selected')">Accept selected</button>
  <button primaryActions mat-flat-button color="primary" (click)="cookiePopUp.onSubmitEvent($event, 'accept_all')">Accept all</button>
</flora-cookie-pop-up>
`;
export const ExampleWithCategories: Story<CookiePopUpComponent> = (args: CookiePopUpComponent) => ({
  props: {
    ...args,
    title: 'Title for the cookie pop-up',
    cookieCategories: exampleCookieCategories,
    onChange: action('onChange'),
    onSubmit: action('onSubmit'),
  },
  template: floraStoryWrapper(exampleWithCategoriesTemplate, { style: { width: '480px' } }),
});
ExampleWithCategories.parameters = { docs: { source: { code: exampleWithCategoriesTemplate } } };

const exampleWithoutCategoriesWithSmallWidthTemplate = `
<flora-cookie-pop-up #cookiePopUp [title]="title">
  <p description>
    Description for cookie pop-up. Proin ac ipsum in ipsum facilisis vehicula. Sed aliquet dolor non licinia vehicula. With a <a href='#'>link</a>
  </p>
  <button otherActions mat-stroked-button color="basic" (click)="cookiePopUp.onSubmitEvent($event, 'see_details')">See details</button>
  <button otherActions mat-stroked-button color="basic" (click)="cookiePopUp.onSubmitEvent($event, 'accept_selected')">Accept selected</button>
  <button primaryActions mat-flat-button color="primary" (click)="cookiePopUp.onSubmitEvent($event, 'accept_all')">Accept all</button>
</flora-cookie-pop-up>
`;
export const ExampleWithoutCategoriesWithSmallWidth: Story<CookiePopUpComponent> = (args: CookiePopUpComponent) => ({
  props: {
    ...args,
    title: 'Title for the cookie pop-up',
    onChange: action('onChange'),
    onSubmit: action('onSubmit'),
  },
  template: floraStoryWrapper(exampleWithoutCategoriesWithSmallWidthTemplate, { style: { width: '320px' } }),
});
ExampleWithoutCategoriesWithSmallWidth.parameters = { docs: { source: { code: exampleWithoutCategoriesWithSmallWidthTemplate } } };

import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SettingsModalComponent } from '../../projects/flora/src/lib/settings-modal/settings-modal.component';
import { SettingsModalModule } from '@flora/lib/settings-modal/settings-modal.module';
import { floraStoryWrapper } from 'stories/utils';
import { MatButtonModule } from '@angular/material/button';
import { SettingToggleModule } from '@flora/lib/setting-toggle/setting-toggle.module';
import { MatDividerModule } from '@angular/material/divider';
import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { CardModule } from '@flora/lib/card/card.module';

export default {
  title: 'Molecules/Settings modal',
  component: SettingsModalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SettingsModalModule,
        SettingToggleModule,
        CardModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatDividerModule,
        MatChipsModule,
        MatButtonModule,
      ],
    }),
  ],
} as Meta;

const singleCookieExample = `
  <flora-setting-toggle title="Google Tag Manager" description="Used by Google AdSense for experimenting with advertisment effciency across websites using their services\nThis description has line break with \\n\n<p>and raw HTML! (p tag 1)</p><p>Lorem ipsum dolo sit amet (p tag 2)</p>"></flora-setting-toggle>
  <mat-chip-list aria-label="Cookie technical data">
    <mat-chip>Cookie name: _gcl_au</mat-chip>
    <mat-chip>Expiry: 3 months</mat-chip>
    <mat-chip>Type: HTTP</mat-chip>
  </mat-chip-list>
`;

const expandableCookieSetting = `
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <p class="mat-body-strong">This is the expansion title</p>
      </mat-panel-title>
      <mat-panel-description>
        <div style="margin-left:auto;"><flora-setting-toggle></flora-setting-toggle></div>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <ng-template matExpansionPanelContent>
      <div style="padding:0 1em 0 2em;">
        <br>${singleCookieExample}<br>
        <mat-divider></mat-divider>
        <br>${singleCookieExample}<br>
        <mat-divider></mat-divider>
        <br>${singleCookieExample}<br>
        <mat-divider></mat-divider>
        <br>${singleCookieExample}<br>
        <mat-divider></mat-divider>
        <br>${singleCookieExample}<br>
      </div>
    </ng-template>
  </mat-expansion-panel>
`;

const expandableCookieSettings = `
  <mat-accordion displayMode="flat" togglePosition="before">
    <br>${expandableCookieSetting}<br>
    <mat-divider></mat-divider>
    <br>${expandableCookieSetting}<br>
    <mat-divider></mat-divider>
    <br>${expandableCookieSetting}<br>
    <mat-divider></mat-divider>
    <br>${expandableCookieSetting}<br>
  </mat-accordion>
`;

const exampleTemplate = `
<flora-settings-modal [title]="title" [pages]="pages" [defaultLanguage]="nb_NO">
  <div header>
    <h1>Cookies</h1>
    <p>For your information, we use cookies. Morbi varius libero vel ipsum finibus accumsan. Etiam diam nunc, malesuada tincidunt consequat tincidunt, condimentum sed orci. Morbi malesuada odio non egestas lacinia. In lobortis eget velit non cursus. Donec pulvinar maximus quam in aliquam. Aliquam vestibulum consectetur nunc et laoreet</p>
  </div>
  <div content>${expandableCookieSettings}</div>
  <button footer mat-stroked-button color="basic">Accept selected</button>
  <button footer mat-flat-button color="primary">Accept all</button>
</flora-settings-modal>
`;
export const Example: Story<SettingsModalComponent> = (args: SettingsModalComponent) => ({
  props: {
    ...args,
    title: 'Settings',
    pages: [
      { slug: 'other-settings-1', title: 'Other settings 1', icon: 'settings' },
      { slug: 'other-settings-2', title: 'Other settings 2', icon: 'notifications' },
      { slug: 'cookies', title: 'Cookies', icon: 'cookie', selected: true },
      { slug: 'other-settings-3', title: 'Other settings 3', icon: 'auto_awesome_mosaic' },
      { slug: 'other-settings-4', title: 'Other settings 4', icon: 'translate' },
    ],
    onPageChangeEvent: action('onPageChange'),
    onModalCloseEvent: action('onModalClose'),
  },
  template: floraStoryWrapper(exampleTemplate, { style: { width: '1200px' } }),
});
Example.parameters = { docs: { source: { code: exampleTemplate } } };

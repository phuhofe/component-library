import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { ControlType, floraStoryWrapper } from '../utils';
import { LanguageSwitcherComponent } from '@flora/lib/language-switcher/language-switcher.component';
import { LanguageSwitcherModule } from '@flora/lib/language-switcher/language-switcher.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Atoms/Language Switcher',
  component: LanguageSwitcherComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, LanguageSwitcherModule],
    }),
    componentWrapperDecorator((story) => floraStoryWrapper(story)),
  ],
  argTypes: {
    availableLanguages: {
      name: 'Available languages',
      description:
        "An array of objects. Each object contains the 'name' key and 'iso' key; where the 'iso' key is in the ISO 3166-1 alpha-2 code standard format",
      control: { type: ControlType.ArrayObject },
    },
    defaultLanguage: {
      name: 'Default language',
      description: 'ISO 3166-1 alpha-2 code for the default language.',
      control: { type: ControlType.InputTypeText },
    },
    buttonStyle: {
      name: 'Button style',
      description: 'Style for the button that opens the autocomplete list. Check the Angular Material docs.',
      control: { type: ControlType.InputTypeText },
    },
    color: {
      name: 'Button color',
      control: { type: ControlType.InputTypeText },
    },
  },
} as Meta;

export const Default: Story<LanguageSwitcherComponent> = (args: LanguageSwitcherComponent) => ({
  props: {
    ...args,
    onLanguageSelected: action('onLanguageSelected'),
  },
});

Default.parameters = { component: LanguageSwitcherComponent };

export const Customized: Story<LanguageSwitcherComponent> = (args: LanguageSwitcherComponent) => ({
  props: {
    ...args,
    onLanguageSelected: action('onLanguageSelected'),
    defaultLanguage: 'kl',
    availableLanguages: [
      {
        name: 'Klingon',
        iso: 'kl',
        flag:
          'https://img.adstate.com/0U-7nnZ7SJOAD-C2D1Hxk8Yxr7AJdfrwngmuCAFrZS8/rs:fill:48:32:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MtMi9rbC5wbmc_RW5WREo2M0ZMSExHRW0yUEVUQkdmSF9ZMnNZdURDTFY.png',
      },
      {
        name: 'Valyrian',
        iso: 'vl',
        flag:
          'https://img.adstate.com/-3mhJUlyitx_c6L_iwQSZQGFNZGjdt81N5fi5DhCXuo/rs:fill:48:32:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MtMi90ci5wbmc_dmdmRWJNODVzVk1CUTg5c2lvNGdkVmtGYXZoT2lUMlQ.png',
      },
      {
        name: 'Trigedasleng',
        iso: 'tr',
        flag:
          'https://img.adstate.com/RxP3if4CCmlyrPzxL-ILCugdqUioHmqob6t82jVhhf4/rs:fill:48:32:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvZmxhZ3MtMi92bC5wbmc_eHpNSlJWT2ZoRVlZdTRFZmxBeW9udWpHRm50NXo1d3E.png',
      },
    ],
    buttonStyle: 'mat-raised-button',
    color: 'primary',
  },
});

Customized.parameters = { component: LanguageSwitcherComponent };

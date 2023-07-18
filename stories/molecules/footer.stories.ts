import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { floraStoryWrapper } from '../utils';

import { FooterComponent } from '@flora/lib/footer/footer.component';
import { FooterModule } from '@flora/lib/footer/footer.module';
import { LogoModule } from '@flora/lib/logo/logo.module';

export default {
  title: 'Molecules/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [FooterModule, LogoModule],
    }),
  ],
} as Meta;

const exampleProps = {
  logo: 'https://design.adstate.com/assets/adstate-branding/logotype/t-logotype-dark.png',
  description:
    'Minnesider er en portal som lar deg søke etter digitale minnesider og dødsfall for hele Norge. På en minnesider kan du skrive en hilsen og dele hyggelige minner, bestille blomster til begravelsen, se livestream og mer.\nI tillegg har vi et tett samarbeid med mange av landets organisasjoner slik at du kan gi en donasjon i den avdødes navn, vi kaller dette minnegaver.',
  descriptionLink: {
    text: 'Les mer om portalen',
    link: '/about-us',
    target: '_blank',
  },
  copyright: 'Copyright © 2022 - Adstate AS',
  menuHeading: 'Meny',
  menu: [
    {
      text: 'Hjem',
      link: 'https://adstate.com',
      target: '_blank',
    },
    {
      text: 'Om portalen',
      link: 'https://adstate.com',
      target: '_blank',
    },
    {
      text: 'Vikrår og betingelser',
      link: 'https://adstate.com',
      target: '_blank',
    },
    {
      text: 'Personvern og informasjonskapsler',
      link: 'https://adstate.com',
      target: '_blank',
    },
  ],
};

// Examples with no content in slot, just props
const exampleWithAllPropsTemplate = `
  <flora-footer
    [logo]="logo"
    [description]="description"
    [descriptionLink]="descriptionLink"
    [copyright]="copyright"
    [menuHeading]="menuHeading"
    [menu]="menu"
  >
  </flora-footer>
`;

// All props
export const ExampleWithAllProps: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    description: exampleProps.description,
    descriptionLink: exampleProps.descriptionLink,
    copyright: exampleProps.copyright,
    menuHeading: exampleProps.menuHeading,
    menu: exampleProps.menu,
  },
  template: floraStoryWrapper(exampleWithAllPropsTemplate, { style: { width: '1200px' } }),
});
ExampleWithAllProps.parameters = { docs: { source: { code: exampleWithAllPropsTemplate } } };

// Few props
export const ExampleWithFewProps: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    copyright: exampleProps.copyright,
    menu: [exampleProps.menu[3]],
  },
  template: floraStoryWrapper(exampleWithAllPropsTemplate, { style: { width: '1200px' } }),
});
ExampleWithFewProps.parameters = { docs: { source: { code: exampleWithAllPropsTemplate } } };

// Examples with image in content slot
const exampleWithAllPropsAndImageInSlotTemplate =
  `
  <flora-footer
    [logo]="logo"
    [description]="description"
    [descriptionLink]="descriptionLink"
    [copyright]="copyright"
    [menuHeading]="menuHeading"
    [menu]="menu"
  >
    <img footerMenuExtra [src]="'/assets/images/examples/' + ` +
  'exampleSlotContentSize' +
  ` + '.jpg'" />
  </flora-footer>
`;

// Wide
export const ExampleWithWideSlotContent: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    description: exampleProps.description,
    descriptionLink: exampleProps.descriptionLink,
    copyright: exampleProps.copyright,
    menuHeading: exampleProps.menuHeading,
    menu: exampleProps.menu,
    exampleSlotContentSize: '700x200',
  },
  template: floraStoryWrapper(exampleWithAllPropsAndImageInSlotTemplate, { style: { width: '1200px' } }),
});
ExampleWithWideSlotContent.parameters = { docs: { source: { code: exampleWithAllPropsAndImageInSlotTemplate } } };

// Normal
export const ExampleWithNormalSlotContent: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    description: exampleProps.description.substring(0, 100) + '...',
    copyright: exampleProps.copyright,
    menuHeading: exampleProps.menuHeading,
    menu: exampleProps.menu,
    exampleSlotContentSize: '300x150',
  },
  template: floraStoryWrapper(exampleWithAllPropsAndImageInSlotTemplate, { style: { width: '1200px' } }),
});
ExampleWithNormalSlotContent.parameters = { docs: { source: { code: exampleWithAllPropsAndImageInSlotTemplate } } };

// Small
export const ExampleWithSmallSlotContent: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    description: exampleProps.description,
    descriptionLink: exampleProps.descriptionLink,
    copyright: exampleProps.copyright,
    menuHeading: exampleProps.menuHeading,
    menu: [exampleProps.menu[3]],
    exampleSlotContentSize: '150x100',
  },
  template: floraStoryWrapper(exampleWithAllPropsAndImageInSlotTemplate, { style: { width: '1200px' } }),
});
ExampleWithSmallSlotContent.parameters = { docs: { source: { code: exampleWithAllPropsAndImageInSlotTemplate } } };

// Examples with text in content slot
const exampleWithAllPropsAndTextInSlotTemplate = `
  <flora-footer
    [logo]="logo"
    [description]="description"
    [descriptionLink]="descriptionLink"
    [copyright]="copyright"
    [menuHeading]="menuHeading"
    [menu]="menu"
  >
    <p footerMenuExtra>{{ exampleSlotContent }}</p>
  </flora-footer>
`;

// Little text
export const ExampleWithLittleTextAsSlotContent: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    description: exampleProps.description,
    descriptionLink: exampleProps.descriptionLink,
    copyright: exampleProps.copyright,
    menuHeading: exampleProps.menuHeading,
    menu: [exampleProps.menu[3]],
    exampleSlotContent: 'Lorem ipsum dolor sit amet',
  },
  template: floraStoryWrapper(exampleWithAllPropsAndTextInSlotTemplate, { style: { width: '1200px' } }),
});
ExampleWithLittleTextAsSlotContent.parameters = { docs: { source: { code: exampleWithAllPropsAndTextInSlotTemplate } } };

// Much text
export const ExampleWithMuchTextAsSlotContent: Story<FooterComponent> = (args: FooterComponent) => ({
  props: {
    ...args,
    logo: exampleProps.logo,
    description: exampleProps.description,
    descriptionLink: exampleProps.descriptionLink,
    copyright: exampleProps.copyright,
    menuHeading: exampleProps.menuHeading,
    menu: [exampleProps.menu[3]],
    exampleSlotContent:
      'Minnesider er en portal som lar deg søke etter digitale minnesider og dødsfall for hele Norge. På en minnesider kan du skrive en hilsen og dele hyggelige minner, bestille blomster til begravelsen, se livestream og mer.',
  },
  template: floraStoryWrapper(exampleWithAllPropsAndTextInSlotTemplate, { style: { width: '1200px' } }),
});
ExampleWithMuchTextAsSlotContent.parameters = { docs: { source: { code: exampleWithAllPropsAndTextInSlotTemplate } } };

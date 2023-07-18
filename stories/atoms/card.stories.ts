import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from '@flora/lib/card/card.component';
import { CardModule } from '@flora/lib/card/card.module';
import { CardPaddingSize, CardShadowSize } from '@flora/lib/enums/card';
import { MatButtonModule } from '@angular/material/button';
import { floraStoryWrapper } from 'stories/utils';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export default {
  title: 'Atoms/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CardModule, MatButtonModule, MatProgressBarModule],
    }),
  ],
} as Meta;

const defaultExample = `<flora-card>ng-content comes here</flora-card>`;
export const Default: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(defaultExample),
});
Default.parameters = { docs: { source: { code: defaultExample } } };

const noPaddingExample = `<flora-card padding="${CardPaddingSize.NONE}">no padding</flora-card>`;
export const NoPadding: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(noPaddingExample),
});
NoPadding.parameters = { docs: { source: { code: noPaddingExample } } };

const smallPaddingExample = `<flora-card padding="${CardPaddingSize.SMALL}">small padding</flora-card>`;
export const SmallPadding: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(smallPaddingExample),
});
SmallPadding.parameters = { docs: { source: { code: smallPaddingExample } } };

const largePaddingExample = `<flora-card padding="${CardPaddingSize.LARGE}">large padding</flora-card>`;
export const LargePadding: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(largePaddingExample),
});
LargePadding.parameters = { docs: { source: { code: largePaddingExample } } };

const ExampleMaterialCard = `
<flora-card padding="${CardPaddingSize.NONE}" [matCard]="${true}">
  <mat-card-header>
    <div mat-card-avatar style="background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); background-size:cover;"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu" />
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very
      well with mountainous terrain, the Shiba Inu was originally bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-flat-button color="primary">LIKE</button>
    <button mat-stroked-button>SHARE</button>
  </mat-card-actions>
  <mat-card-footer>
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  </mat-card-footer>
</flora-card>`;
export const MaterialCard: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(ExampleMaterialCard, {
    style: {
      width: '480px',
    },
  }),
});
MaterialCard.parameters = { docs: { source: { code: ExampleMaterialCard } } };

const noShadowExample = `<flora-card shadow="${CardShadowSize.NONE}">no shadow</flora-card>`;
export const NoShadow: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(noShadowExample),
});
NoShadow.parameters = { docs: { source: { code: noShadowExample } } };

const smallShadowExample = `<flora-card shadow="${CardShadowSize.SMALL}">small shadow</flora-card>`;
export const SmallShadow: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(smallShadowExample),
});
SmallShadow.parameters = { docs: { source: { code: smallShadowExample } } };

const mediumShadowExample = `<flora-card shadow="${CardShadowSize.MEDIUM}">medium shadow</flora-card>`;
export const MediumShadow: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(mediumShadowExample),
});
MediumShadow.parameters = { docs: { source: { code: mediumShadowExample } } };

const largeShadowExample = `<flora-card shadow="${CardShadowSize.LARGE}">large shadow</flora-card>`;
export const LargeShadow: Story<CardComponent> = (args: CardComponent) => ({
  props: { ...args },
  template: floraStoryWrapper(largeShadowExample),
});
LargeShadow.parameters = { docs: { source: { code: largeShadowExample } } };

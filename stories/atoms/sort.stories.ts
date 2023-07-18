import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';

import { ControlType, floraStoryWrapper } from '../utils';
import { SortModule } from '@flora/lib/sort/sort.module';
import { SortComponent } from '@flora/lib/sort/sort.component';
import { SortItemsType } from '@flora/lib/interfaces/Sort';

export default {
  title: 'Atoms/Sort',
  component: SortComponent,
  decorators: [
    moduleMetadata({
      imports: [SortModule],
    }),
    componentWrapperDecorator((story) => floraStoryWrapper(story)),
  ],
  argTypes: {
    label: {
      name: 'Label',
      control: { type: ControlType.InputTypeText },
    },
    items: {
      name: 'Items',
      control: { type: 'array' },
    },
  },
} as Meta;

export const Default: Story<SortComponent> = (args: SortComponent) => ({
  props: {
    ...args,
  },
});

const exampleSortItems: SortItemsType[] = [
  {
    displayValue: 'Most relevant',
    value: 'mostRelevant',
  },
  {
    displayValue: 'Alphabetically sorted by first name (A - Å)',
    value: 'firstName',
  },
  {
    displayValue: 'Alphabetically sorted by last name (A - Å)',
    value: 'lastName',
  },
  {
    displayValue: 'Year of birth (high to low)',
    value: 'birthYearHighToLow',
  },
  {
    displayValue: 'Year of birth (low to high)',
    value: 'birthYearLowToHigh',
  },
  {
    displayValue: 'Year of death (high to low)',
    value: 'deathYearHighToLow',
  },
  {
    displayValue: 'Year of death (low to high)',
    value: 'deathYearLowToHigh',
  },
];

export const ExampleWithData: Story<SortComponent> = (args: SortComponent) => ({
  props: {
    ...args,
    label: 'Sort',
    items: exampleSortItems,
  },
});

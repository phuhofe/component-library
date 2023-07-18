import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { ControlType, floraStoryWrapper } from '../utils';
import { FilterModule } from '@flora/lib/filter/filter.module';
import {
  FilterComponent,
  DefaultUsingCustomTemplate,
  DefaultIsCollapsed,
} from '@flora/lib/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Atoms/Filter',
  component: FilterComponent,
  decorators: [
    moduleMetadata({
      imports: [FilterModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) =>
      floraStoryWrapper(story, {
        style: {
          width: '1200px',
        },
      })
    ),
  ],
  argTypes: {
    label: {
      name: 'Label',
      control: { type: ControlType.InputTypeText },
    },
    isCollapsed: {
      name: 'Is collapsed',
      defaultValue: DefaultIsCollapsed,
      control: { type: ControlType.Boolean },
    },
    usingCustomTemplate: {
      name: 'Using custom template',
      defaultValue: DefaultUsingCustomTemplate,
      control: { type: ControlType.Boolean },
    },
    cityOptions: {
      name: 'City options',
      control: { type: ControlType.ArrayObject },
    },
  },
} as Meta;

const regionsAndCities = {
  data: [
    {
      id: 0,
      name: 'All regions',
      cities: [
        {
          id: 0,
          name: 'All cities',
        },
      ],
    },
    {
      id: 347,
      name: 'Agder',
      cities: [
        {
          id: 296,
          name: 'Gjerstad',
        },
        {
          id: 573,
          name: 'Sirdal',
        },
        {
          id: 79184,
          name: 'Andabeløy',
        },
        {
          id: 79415,
          name: 'Finsland',
        },
      ],
    },
  ],
};

export const Default: Story<FilterComponent> = (args: FilterComponent) => ({
  props: {
    ...args,
  },
});

export const ExampleWithData: Story<FilterComponent> = (args: FilterComponent) => ({
  props: {
    ...args,
    filterButton: 'Filter',
    firstNameLabel: 'First name',
    lastNameLabel: 'Last name',
    birthdateLabel: 'Birthdate',
    deathdateLabel: 'Deathdate',
    regionLabel: 'Region',
    cityLabel: 'City',
    clearButton: 'Clear',
    cancelButton: 'Cancel',
    applyButton: 'Apply',
    invalidDate: 'Invalid date',
    cityOptions: regionsAndCities,
    isCollapsed: false,
  },
});

import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { ControlType, floraStoryWrapper } from '../utils';
import { SearchModule } from '@flora/lib/search/search.module';
import { SearchBoxComponent } from '@flora/lib/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Molecules/Search',
  component: SearchBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [SearchModule, BrowserAnimationsModule],
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
    searchLabel: {
      name: 'Search label',
      control: { type: ControlType.InputTypeText },
    },
    placeholder: {
      name: 'Placeholder',
      control: { type: ControlType.InputTypeText },
    },
    usingCustomTemplate: {
      name: 'Using custom search template',
      control: { type: ControlType.Boolean },
    },
    areas: {
      name: 'Search areas',
      control: { type: ControlType.ArrayObject },
    },
    suggestKeywords: {
      name: 'Search areas',
      control: { type: ControlType.ArrayObject },
    },
    searchValue: { table: { disable: true } },
    selected: { table: { disable: true } },
  },
} as Meta;

const defaultSuggestKeyWords = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
const defaultSearchLabel = 'Search';
const defaultPlaceholder = 'Enter a name, year or place';
const defaultUsingCustomTemplate = false;
const defaultSearchLocations = [
  { label: 'Local', value: 'local', isDefault: false },
  { label: 'National', value: 'national', isDefault: true },
];
export const Default: Story<SearchBoxComponent> = () => {
  return {
    props: {
      suggestKeywords: defaultSuggestKeyWords,
      searchLabel: defaultSearchLabel,
      placeholder: defaultPlaceholder,
      usingCustomTemplate: defaultUsingCustomTemplate,
      searchLocations: defaultSearchLocations,
      disableSearchButton: false,
    },
  };
};
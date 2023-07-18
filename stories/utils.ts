import { StoryFnAngularReturnType } from '@storybook/angular/dist/ts3.9/client/preview/types';

export enum ControlType {
  // Data type: Boolean
  Boolean = 'boolean',

  // Data type: Number
  Number = 'number',
  Range = 'range',

  // Data type: Object
  Object = 'object',

  // Data type: Array
  ArrayObject = 'object',
  File = 'file',

  // Data type: Enum
  Select = 'select',
  MultiSelect = 'multi-select',

  Radio = 'radio',
  InlineRadio = 'inline-radio',

  Checkbox = 'check',
  InlineCheckbox = 'inline-check',

  // Data type: String
  InputTypeText = 'text',
  InputTypeColor = 'color',
  InputTypeDate = 'date',
}

interface FloraStoryWrapperOptions {
  style: {
    width?: string;
    padding?: string;
    backgroundColor?: string;
  };
}

export const floraStoryWrapper = (
  story: StoryFnAngularReturnType['template'],
  options?: FloraStoryWrapperOptions
): StoryFnAngularReturnType['template'] => {
  let style = 'display: grid; justify-content: center; margin: 2em auto;';

  if (!options) {
    options = { style: {} };
  }

  if (!options.style.width) {
    options.style.width = 'auto';
  }

  if (!options.style.padding) {
    options.style.padding = '0px';
  }

  if (!options.style.backgroundColor) {
    options.style.backgroundColor = 'transparent';
  }

  style += 'grid-template-columns: minmax(0px, ' + options.style.width + ');';
  style += 'padding:' + options.style.padding + ';';
  style += 'background-color:' + options.style.backgroundColor + ';';

  style += 'max-width:100%;';

  return `<div style="${style}">${story}</div>`;
};

import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { floraStoryWrapper } from '../utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerComponent } from '@flora/lib/date-picker/date-picker.component';
import { DatePickerModule } from '@flora/lib/date-picker/date-picker.module';

export default {
  title: 'Atoms/Date picker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [DatePickerModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) =>
      floraStoryWrapper(story, {
        style: {
          width: '1200px',
        },
      })
    ),
  ],
} as Meta;

export const Default: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  props: {
    ...args,
    text: 'text default',
    background: 'secondary'
  },
});

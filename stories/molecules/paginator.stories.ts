import { componentWrapperDecorator, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from '@flora/lib/paginator/paginator.component';
import { PaginatorModule } from '@flora/lib/paginator/paginator.module';
import { OrderType } from '@flora/lib/interfaces/order';
import { ControlType, floraStoryWrapper } from '../utils';
import faker from 'faker';

export default {
  title: 'Molecules/Paginator',
  component: PaginatorComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, PaginatorModule],
    }),
    componentWrapperDecorator((story) =>
      floraStoryWrapper(story, {
        style: {
          width: '760px',
        },
      })
    ),
  ],
} as Meta;

export const Default = (arg) => ({
  props: {
    ...arg,
  },
});

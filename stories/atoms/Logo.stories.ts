import { componentWrapperDecorator } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ControlType, floraStoryWrapper } from 'stories/utils';
import { LogoComponent } from '@flora/lib/logo/logo.component';

export default {
  title: 'Atoms/Logo',
  component: LogoComponent,
  decorators: [
    componentWrapperDecorator((story) =>
      floraStoryWrapper(story, {
        style: {
          width: '480px',
        },
      })
    ),
  ],
  argTypes: {
    imageSource: {
      name: 'Image source',
      defaultValue: 'https://design.adstate.com/assets/adstate-branding/logotype/t-logotype-dark.png',
      control: { type: ControlType.InputTypeText },
    },
    height: {
      name: 'Height',
      control: { type: ControlType.InputTypeText },
    },
    imageAltText: {
      name: 'Alt text',
      control: { type: ControlType.InputTypeText },
    },
  },
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  component: LogoComponent,
  props: args,
});

export const Default = Template.bind({});

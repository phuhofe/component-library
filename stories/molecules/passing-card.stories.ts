import { componentWrapperDecorator, Meta, moduleMetadata } from '@storybook/angular';
import { PassingCardComponent, DefaultLoadingPhoto, DefaultFallbackPhoto } from '@flora/lib/passing-card/passing-card.component';
import { PassingCardModule } from '@flora/lib/passing-card/passing-card.module';
import { ControlType, floraStoryWrapper } from '../utils';
import { OrderData as order } from '@flora/lib/mock/mock-order-passing-card';

export default {
  title: 'Molecules/Passing Card',
  component: PassingCardComponent,
  decorators: [
    moduleMetadata({
      imports: [PassingCardModule],
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
    order: {
      name: 'Order',
      type: { required: true },
      control: { type: ControlType.Object },
    },
    loadingPhoto: {
      name: 'Loading photo',
      defaultValue: DefaultLoadingPhoto,
      type: { required: false },
      control: { type: ControlType.InputTypeText },
    },
    fallbackPhoto: {
      name: 'Fallback photo',
      defaultValue: DefaultFallbackPhoto,
      type: { required: false },
      control: { type: ControlType.InputTypeText },
    },
  },
} as Meta;

export const Default = (arg) => ({
  props: {
    ...arg,
    order: order,
  },
});

const orderWithDisabled = JSON.parse(JSON.stringify(order));
orderWithDisabled.services.memorialPage.disabled = true;
orderWithDisabled.services.flowerShop.disabled = true;
orderWithDisabled.services.donation.disabled = true;
export const WithDisabled = (arg) => ({
  props: {
    ...arg,
    order: orderWithDisabled,
  },
});

const orderWithLongName = JSON.parse(JSON.stringify(order));
orderWithLongName.person.firstName = 'Shakti Ben Shweta Patla Archana';
orderWithLongName.person.lastName = 'Meka';
export const WithLongName = (arg) => ({
  props: {
    ...arg,
    order: orderWithLongName,
  },
});

const orderWithPhoto = JSON.parse(JSON.stringify(order));
orderWithPhoto.person.photoUrl =
  'https://img.adstate.com/bV5UM8j5QCwqdZeewrSVytETYcmtZEVMHfMgRsuHbBE/rs:fill:192:192:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvcGVyc29uLWZlbWFsZS5qcGc_WHVlbzhfcHhYNWZzbkR6eUpoN3dCZlE0aWtTanQzNWo.jpg';
export const WithPhoto = (arg) => ({
  props: {
    ...arg,
    order: orderWithPhoto,
  },
});

const orderWithCustomLabels = JSON.parse(JSON.stringify(order));
orderWithCustomLabels.services.deathNotice.label = 'Custom 1';
orderWithCustomLabels.services.memorialPage.label = 'Custom 2';
orderWithCustomLabels.services.donation.label = 'Custom 3';
orderWithCustomLabels.services.flowerShop.label = 'Custom 4';
export const WithCustomLabels = (arg) => ({
  props: {
    ...arg,
    order: orderWithCustomLabels,
  },
});

const orderWithoutDeathDate = JSON.parse(JSON.stringify(order));
orderWithoutDeathDate.person.deathdate = undefined;
export const WithoutDeathDate = (arg) => ({
  props: {
    ...arg,
    order: orderWithoutDeathDate,
  },
});

const orderWithoutBirthAndDeathDate = JSON.parse(JSON.stringify(order));
orderWithoutBirthAndDeathDate.person.birthdate = null;
orderWithoutBirthAndDeathDate.person.deathdate = undefined;
export const WithoutBirthAndDeathDate = (arg) => ({
  props: {
    ...arg,
    order: orderWithoutBirthAndDeathDate,
  },
});

const orderWithoutBirthDateAndCity = JSON.parse(JSON.stringify(order));
orderWithoutBirthDateAndCity.person.birthdate = null;
orderWithoutBirthDateAndCity.person.deathcity = null;
export const WithoutBirthDateAndCity = (arg) => ({
  props: {
    ...arg,
    order: orderWithoutBirthDateAndCity,
  },
});

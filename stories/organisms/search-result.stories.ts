import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { SearchResultComponent } from '@flora/lib/search-result/search-result.component';
import { OrderType } from '@flora/lib/interfaces/order';
import faker from 'faker';
import { ControlType, floraStoryWrapper } from 'stories/utils';
import { SearchResultModule } from '@flora/lib/search-result/search-result.module';
import { PassingCardModule } from '@flora/lib/passing-card/passing-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultLayout } from '@flora/lib/enums/search-result.enum';

export default {
  title: 'Organisms/Search result',
  component: SearchResultComponent,
  decorators: [
    moduleMetadata({
      imports: [SearchResultModule, PassingCardModule, BrowserAnimationsModule],
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

const orders: OrderType[] = [];

const currentYear = new Date().getFullYear();

function getDateStringFromIsoDate(date: Date) {
  return date.toISOString().substring(0, 10);
}

for (let i = 0; i < 25; i++) {
  orders.push({
    person: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthdate: getDateStringFromIsoDate(faker.date.between(currentYear - 110 + '-01-01', currentYear - 10 + '-01-01')),
      deathdate: getDateStringFromIsoDate(faker.date.past()),
      deathcity: faker.address.cityName(),
      photoUrl: faker.datatype.boolean()
        ? null
        : faker.datatype.boolean()
        ? 'https://img.adstate.com/bV5UM8j5QCwqdZeewrSVytETYcmtZEVMHfMgRsuHbBE/rs:fill:192:192:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvcGVyc29uLWZlbWFsZS5qcGc_WHVlbzhfcHhYNWZzbkR6eUpoN3dCZlE0aWtTanQzNWo.jpg'
        : 'https://img.adstate.com/tGw1Sxi-w0i_P_TrgwKHqJG6i9R1XlSLk4vzHRMxIQU/rs:fill:192:192:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvcGVyc29uLW1hbGUuanBnP2UxZDlEMm8wZE9iWGZWaGVnT3VGRmpRR0NVUXk5QTdm.jpg',
    },
    services: {
      memorialPage: {
        disabled: faker.datatype.boolean(),
        url: '#memorialPage',
      },
      donation: {
        disabled: faker.datatype.boolean(),
        url: '#donation',
      },
      flowerShop: {
        disabled: faker.datatype.boolean(),
        url: '#flowerShop',
      },
      deathNotice: {
        disabled: faker.datatype.boolean(),
        url: '#deathNotice',
      },
    },
    ceremony: {
      location: faker.address.cityName(),
      date: getDateStringFromIsoDate(faker.date.between(Date(), currentYear + 1 + '-01-01')),
    },
  });
}

export const DefaultLayout: Story<SearchResultComponent> = (args: SearchResultComponent) => ({
  props: {
    ...args,
    orders,
    layout: SearchResultLayout.DEFAULT,
    paginatorPaging: {
      pageSize: 20,
      totalPages: 2,
      totalElements: 40,
      currentPage: 0,
    },
  },
});

export const TwoColumnTwoButtonLayout: Story<SearchResultComponent> = (args: SearchResultComponent) => ({
  props: {
    ...args,
    orders,
    layout: SearchResultLayout.TWO_COLUMN_TWO_BUTTON,
    paginatorPaging: {
      pageSize: 20,
      totalPages: 2,
      totalElements: 40,
      currentPage: 0,
    },
  },
});

export const TwoColumnFourButtonLayout: Story<SearchResultComponent> = (args: SearchResultComponent) => ({
  props: {
    ...args,
    orders,
    layout: SearchResultLayout.TWO_COLUMN_FOUR_BUTTON,
    paginatorPaging: {
      pageSize: 20,
      totalPages: 2,
      totalElements: 40,
      currentPage: 0,
    },
  },
});

export const WithNoResultsDefault: Story<SearchResultComponent> = (args: SearchResultComponent) => ({
  props: {
    ...args,
    orders: [],
    paginatorPaging: {
      pageSize: 20,
      totalPages: 0,
      totalElements: 0,
      currentPage: 0,
    },
  },
});

export const WithNoResultsCustom: Story<SearchResultComponent> = (args: SearchResultComponent) => ({
  props: {
    ...args,
    orders: [],
    paginatorPaging: {
      pageSize: 20,
      totalPages: 0,
      totalElements: 0,
      currentPage: 0,
    },
    noResultsTitle: 'Custom title',
    noResultsDescription: 'Custom description',
    noResultsImage:
      'https://img.adstate.com/rTZ-8wPJyharKmcDRq-sNkG8iHWqjm96uiVvAkYbvrE/rs:fit:0:0:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvbGFrZS5qcGc_SDJkQUs2b0lDbHBPZC5jMVJ2bVlKZkQuRzdGblcub2g.jpg',
    noResultsImagePadded: false,
  },
});

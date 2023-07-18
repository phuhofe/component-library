import { OrderType } from '../interfaces/order';
import faker from 'faker';

const currentYear = new Date().getFullYear();

export const OrderData: OrderType = {
  id: 4108302,
  person: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthdate: getDateStringFromIsoDate(faker.date.between(currentYear - 110 + '-01-01', currentYear - 10 + '-01-01')),
    deathdate: getDateStringFromIsoDate(faker.date.past()),
    deathcity: faker.address.cityName(),
    photoUrl: null,
    nameAndPhotoLink: null,
  },
  services: {
    memorialPage: {
      url: '#memorialPage',
    },
    donation: {
      url: '#donation',
    },
    flowerShop: {
      url: '#flowerShop',
    },
    deathNotice: {
      url: '#deathNotice',
    },
  },
  ceremony: {
    location: '',
    dateTime: null,
  },
};

function getDateStringFromIsoDate(date: Date): string {
  return date.toISOString().substring(0, 10);
}

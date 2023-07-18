import faker from 'faker';
import { OrderType } from '../interfaces/order';
const currentYear = new Date().getFullYear();
export const OrderData: OrderType = {
  id: 2,
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
    location: faker.address.cityName(),
    dateTime: getDateStringFromIsoDate(faker.date.between(Date(), currentYear + 1 + '-01-01')),
  },
};

function getDateStringFromIsoDate(date: Date): string {
  return date.toISOString().substring(0, 10);
}

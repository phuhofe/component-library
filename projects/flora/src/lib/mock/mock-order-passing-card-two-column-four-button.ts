import faker from 'faker';
import { OrderType } from '../interfaces/order';

const currentYear = new Date().getFullYear();

export const OrderData: OrderType = {
  id: 1,
  person: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthdate: getDateStringFromIsoDate(faker.date.between(currentYear - 110 + '-01-01', currentYear - 10 + '-01-01'), {
      year: 'numeric',
    }),
    deathdate: getDateStringFromIsoDate(faker.date.past(), { day: '2-digit', month: '2-digit', year: 'numeric' }),
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
    dateTime: getDateStringFromIsoDate(faker.date.between(Date(), currentYear + 1 + '-01-01'), {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  },
};

function getDateStringFromIsoDate(date: Date, format: object): string {
  return new Intl.DateTimeFormat('no-NB', format).format(date);
}

import { faker } from '@faker-js/faker';

export const USER = {
    STANDARD: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
};

export const CHECKOUT_DATA = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.location.postalCode(),
};

export const BASE_URL = 'https://www.saucedemo.com';
